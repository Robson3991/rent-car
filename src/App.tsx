import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import Tiles from 'components/organisms/Tiles';
import { QueryClient, QueryClientProvider } from 'react-query';
import Container from 'components/atoms/Container';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Tiles />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
