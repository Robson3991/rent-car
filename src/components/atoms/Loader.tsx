import styled from 'styled-components';
import loader from 'img/loader.gif';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const Loader = () => (
  <Wrapper>
    <img src={loader} />
  </Wrapper>
);

export default Loader;
