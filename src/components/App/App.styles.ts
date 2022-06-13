import styled, { css } from "styled-components";

export const Message = styled.p`
  margin: 2rem;
  font-size: 1.4rem;
`;

export const ErrorMessage = styled(Message)`
  color: ${({ theme }) => theme.colors.error};
  margin: 0.8rem 0;
`;

export const buttonGeneralStyles = () => css`
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  transition: all 150ms ease-in-out;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(-1px);
  }
  &:focus {
    outline: 4px ${({ theme }) => theme.colors.subMenuBg} solid;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  svg {
    width: 1.5rem;
  }
`;

export const inputGeneralStyles = css`
  border: 0;
  outline: none;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0.8rem;
  font-size: inherit;
  width: 100%;
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.subMenuBg};
  }
`;
