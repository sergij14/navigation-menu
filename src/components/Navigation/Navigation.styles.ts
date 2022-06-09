import styled from "styled-components";

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

export const MenuItemText = styled.span`
  color: green;
`;

export const SubMenuContainer = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
`;

export const InnerMenu = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const InnerMenuContent = styled.div`
  display: block;
`;

export const SubMenuInner = styled.div`
  margin-top: 6rem;
  background: ${({ theme }) => theme.colors.subMenuBg};
  width: 60vw;
  display: flex;
`;

export const SubMenuItems = styled.div`
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
  align-self: flex-start;
  justify-self: flex-start;
`;

export const SubMenuItem = styled.li<{ isSelected: boolean }>`
  padding: 0.5rem;
  background-color: ${({ isSelected }) =>
    isSelected ? "white" : "transparent"};
  &:hover {
    background-color: white;
  }
`;

export const MenuItem = styled.li`
  background-color: red;
  align-self: flex-start;
  justify-self: flex-start;
  padding: 1rem 1.5rem;
  position: relative;

  &:hover {
    background-color: green;
  }
  &:hover ${MenuItemText} {
    color: white;
  }
  &:hover ${SubMenuContainer} {
    display: block;
  }
`;
