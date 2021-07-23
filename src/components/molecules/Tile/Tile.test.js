/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import Tile from './Tile';

const offer = {
  make: "Volkswagen",
  model: "up!",
  engine: "1.0 BMT",
  availability: true,
  photo: "https://s.qarson.com/cars/39553/LF30.qlt.jpg"
}

const changeAvailibility = jest.fn();
const handleDelete = () => jest.fn();

const MockedTile = () => <Tile offer={offer} changeAvailibility={changeAvailibility} handleDelete={handleDelete} />

describe('Tile tests', () => {

  it('should render tile', () => {
    render(<MockedTile />);
    const tilelement = screen.getByText(/Volkswagen up!/i);
    expect(tilelement).toBeInTheDocument();
  });

  it('should tile available', () => {
    render(<MockedTile />);
    const buttonlement = screen.getByText(/Add to cart/i);
    expect(buttonlement).toBeInTheDocument();
  });

  it('should show tile photo', () => {
    render(<MockedTile />);
    const imageElement = screen.getByTestId('tile-image');
    expect(imageElement.src).toContain('https://s.qarson.com/cars/39553/LF30.qlt.jpg');
  });
});
