import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  transition: background-color var(--transition);
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray);
  }
`;

export default Button;
