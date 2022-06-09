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
  flex-direction: column;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 4rem;
`;

export const SubMenuItem = styled.li`
  background-color: orange;
`;

export const SubMenuItemText = styled.span`
  color: blue;
`;

export const InnerMenu = styled.div`
  background-color: brown;
`;

export const MenuItem = styled.li`
  background-color: red;
  align-self: flex-start;
  justify-self: flex-start;
  padding:1rem 1.5rem;
  position: relative;

  &:hover {
    background-color: green;
  }
  &:hover ${MenuItemText} {
    color: white;
  }
  &:hover ${SubMenuContainer} {
    display: flex;
  }

`;
