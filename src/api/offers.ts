import { useQuery } from 'react-query';
import axios from 'axios';

function useOffers() {
  return useQuery('posts', async () => {
    const { data } = await axios.get('http://localhost:3004/offers');
    return data;
  });
}

export default useOffers;
