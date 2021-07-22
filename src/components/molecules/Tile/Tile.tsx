import { OfferT } from 'types';
import Button from 'components/atoms/Button';
import {
  Wrapper,
  Footer,
  ImageWrapper,
  Description,
  CloseButton,
} from './Tile.style';
import Car from 'components/atoms/svg/Car';

interface TileProps {
  offer: OfferT;
  changeAvailibility: () => void;
  handleDelete: () => void;
}

const Tile: React.FC<TileProps> = ({
  offer,
  changeAvailibility,
  handleDelete,
}) => {
  const { make, model, engine, availability, photo } = offer;

  return (
    <Wrapper>
      <CloseButton onClick={() => handleDelete()} />
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
        <Button disabled={!availability} onClick={changeAvailibility}>
          {availability ? 'Add to cart' : 'Unavailability'}
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default Tile;
