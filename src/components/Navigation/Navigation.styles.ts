import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.subMenuBg};
  padding: 2rem 1.5rem;
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuIconContainer = styled.div`
  width: 2.4rem;
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuItemLink = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.subMenuBg};
    color: ${({ theme }) => theme.colors.border};
    text-decoration: none;
  }
`;

export const SubMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
`;

export const InnerMenu = styled.div<{ isVisible: boolean }>`
  height: 100%;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-wrap: wrap;
  padding: 1rem;
  border-top: 4px solid ${({ theme }) => theme.colors.border};
`;

export const InnerMenuTitle = styled.h4`
  margin-bottom: 1.5rem;
`;

export const InnerMenuContent = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 2rem;
`;

export const InnerMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const InnerMenuItem = styled.p``;

export const SubMenuInner = styled.div`
  margin-top: 2rem;
  background: ${({ theme }) => theme.colors.subMenuBg};
  width: 60vw;
  display: flex;
`;

export const SubMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  flex: 0 0 30%;
  align-self: stretch;
  justify-self: stretch;
`;

export const SubMenuItemContents = styled.div`
  background-color: white;
  max-width: 70%;
  flex: 0 0 70%;
  align-self: stretch;
  justify-self: stretch;
`;

export const SubMenuItem = styled.li<{ isSelected: boolean }>`
  & > a {
    cursor: pointer;
    display: block;
    padding: 1rem 2rem;
    white-space: nowrap;
    ${({ isSelected }) =>
      isSelected &&
      css`
        color: ${({ theme }) => theme.colors.border};
        background-color: white;
      `};
    &:hover {
      background-color: white;
      color: ${({ theme }) => theme.colors.border};
      text-decoration: none;
    }
  }
`;

export const MenuItem = styled.li`
  align-self: flex-start;
  justify-self: flex-start;
  position: relative;
  &:hover ${SubMenuContainer} {
    display: block;
  }
  &:hover ${MenuItemLink} {
    background-color: ${({ theme }) => theme.colors.subMenuBg};
    color: ${({ theme }) => theme.colors.border};
  }
`;
