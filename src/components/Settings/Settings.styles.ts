import styled from "styled-components";

export const SettingsContainer = styled.div`
  padding: 2rem;
`;

export const SettingsHeading = styled.h3`
  margin-bottom: 0.5rem;
`;

export const SettingsForm = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 5px;
`;

export const SettingsSubHeading = styled.p`
  margin-bottom: 2rem;
`;

export const SettingsButtons = styled.div`
  border-top: 1px ${({ theme }) => theme.colors.subMenuBg} dashed;
  margin-top: 5rem;
  padding-top: 2rem;
`;

export const SettingsButton = styled.button`
  padding: 0.7rem 1.5rem;
  color: white;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  transition: all 150ms ease-in-out;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    transform: translateY(-4px);
  }
  &:active {
    transform: translateY(-2px);
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
