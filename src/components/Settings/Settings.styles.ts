import styled, { css } from "styled-components";
import { buttonGeneralStyles } from "../App/App.styles";

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

export const SettingsFieldContainer = styled.div`
  margin: 1rem 0;
`;

export const SettingsSubHeading = styled.p`
  margin-bottom: 2rem;
`;

export const SettingsButtons = styled.div`
  border-top: 1px ${({ theme }) => theme.colors.subMenuBg} dashed;
  margin-top: 2rem;
  padding-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const SettingsButton = styled.button`
  ${buttonGeneralStyles};
  color: white;
  background: ${({ theme }) => theme.colors.button};
`;

export const SettingsButtonDiscard = styled.button`
  ${buttonGeneralStyles};
  background: white;
  border: 1px gray solid;
`;

export const SettingsField = styled.div`
  padding: 1rem;
`;

export const InnerItems = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;

  font-weight: 700;
  font-size: 1.4rem;
`;

export const FieldCollapsableContainer = styled.div`
  border-top: 2px ${({ theme }) => theme.colors.bg} solid;
  padding: 1rem;
  border-radius: 5px;
`;

export const FieldCollapsableTitle = styled.span<{ isActive: boolean }>`
  margin-bottom: 1.5rem;
  font-weight: bold;
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.button};
    `}
  &:hover {
    color: ${({ isActive }) => !isActive && "black"};
  }
  width: fit-content;
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  svg {
    width: 2rem;
  }
`;

export const FieldInput = styled.input`
  border: 0;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.subMenuBg};
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0.8rem;
  font-size: inherit;
  width: 100%;
  max-width: 200px;
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.subMenuBg};
    border-bottom: 2px solid ${({ theme }) => theme.colors.button};
  }
`;

export const DeleteFieldButton = styled.button`
  ${buttonGeneralStyles};
  color: white;
  background: ${({ theme }) => theme.colors.error};
`;
