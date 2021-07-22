import { OfferT } from 'types';
import Button from 'components/atoms/Button';
import { Wrapper, Footer, ImageWrapper, Description } from './Tile.style';
import Car from 'components/atoms/svg/Car';

const Tile: React.FC<{ offer: OfferT }> = ({ offer }) => {
  const { make, model, engine, availability, photo } = offer;

  return (
    <Wrapper>
      <ImageWrapper availability={availability}>
        {photo ? <img src={photo} /> : <Car width="100" height="80" />}
      </ImageWrapper>
      <Footer>
        <Description>
          <p>
            {make} {model}
          </p>
          <span>{engine}</span>
        </Description>
        <Button disabled={!availability}>
          {availability ? 'Add to cart' : 'Unavailability'}
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default Tile;
