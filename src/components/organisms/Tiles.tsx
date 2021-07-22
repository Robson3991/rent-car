import { useState, useEffect } from 'react';
import Tile from 'components/molecules/Tile/Tile';
import useOffers from 'api/offers';
import Loader from 'components/atoms/Loader';
import { OfferT } from 'types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${up('md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${up('lg')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${up('xl')} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Tiles = () => {
  const { data, error, isFetching } = useOffers();
  const [offers, setOffers] = useState<[] | OfferT[]>([]);

  const changeAvailability = (index: number) => {
    setOffers((prevState) => {
      return prevState.map((item, i) => {
        if (i === index) item.availability = false;
        return item;
      });
    });
  };

  const handleDelete = (index: number) => {
    setOffers((prevState) => {
      return prevState.filter((item, i) => {
        return index != i;
      });
    });
  };

  useEffect(() => {
    if (data) {
      setOffers(data);
    }
  }, [data]);

  if (isFetching) return <Loader />;
  if (error) return <p>There was a problem while fetching data</p>;

  return (
    <Wrapper>
      {offers &&
        (offers as unknown as Array<OfferT>).map(
          (offer: OfferT, index: number) => (
            <Tile
              key={index}
              offer={offer}
              changeAvailibility={() => changeAvailability(index)}
              handleDelete={() => handleDelete(index)}
            />
          ),
        )}
    </Wrapper>
  );
};

export default Tiles;
