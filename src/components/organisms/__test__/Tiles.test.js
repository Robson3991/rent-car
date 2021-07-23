import { render, screen, fireEvent } from '@testing-library/react';
import Tiles from '../Tiles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const QueryTiles = () => (
    <QueryClientProvider client={queryClient}>
        <Tiles />
    </QueryClientProvider>
)

describe('Tiles tests', () => {

    it('should change availibility after click add to cart button', async () => {
        render(<QueryTiles />);
        const addToCartButtons = await screen.findAllByText(/Add to cart/i);
        fireEvent.click(addToCartButtons[0]);
        expect(addToCartButtons[0]).toHaveTextContent(/Unavailability/i);
    });

});