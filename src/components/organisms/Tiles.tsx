import Tile from 'components/molecules/Tile/Tile';
import useOffers from 'api/offers';
import Loader from 'components/atoms/Loader';
import { OfferT } from 'types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Tiles = () => {
  const { data, error, isFetching } = useOffers();

  if (isFetching) return <Loader />;
  if (error) return <p>There was a problem while fetching data</p>;

  return (
    <Wrapper>
      {data.map((offer: OfferT, index: number) => (
        <Tile key={index} offer={offer} />
      ))}
    </Wrapper>
  );
};

export default Tiles;
