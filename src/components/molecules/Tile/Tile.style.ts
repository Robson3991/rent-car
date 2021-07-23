import styled from 'styled-components';
import { OfferT } from 'types';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px;
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
`;

export const ImageWrapper = styled.div<Partial<OfferT>>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  aspect-ratio: 2 / 1;
  overflow: hidden;

  & > svg {
    transition: opacity var(--transition);

    ${({ availability }) =>
      !availability &&
      `
        opacity: 0.5;
    `};
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    transition: opacity var(--transition);

    ${({ availability }) =>
      !availability &&
      `
        opacity: 0.5;
    `};
  }

  &:after {
    position: absolute;
    bottom: 20px;
    left: 20px;
    content: '';
    width: 30px;
    height: 30px;
    background-color: ${({ availability }) =>
      !availability ? `var(--color-error)` : `var(--color-white)`};
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transform: rotate(45deg);
    transition: background-color var(--transition);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid rgba(var(--color-black-rgb), 0.2);
  flex-grow: 1;
`;

export const Description = styled.div`
  margin-right: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--color-gray);
  }
`;

export const CloseButton = styled.div`
  z-index: 1;
  position: absolute;
  width: 12px;
  height: 12px;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity var(--transition);

  &:after {
    font-size: 1.2rem;
    content: '\\274c';
    color: var(--color-error);
    text-align: center;
  }

  &:hover {
    opacity: 0.5;
  }
`;
