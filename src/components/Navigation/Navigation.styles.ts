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

export const SubMenuItemText = styled.span`
  color: blue;
  border-bottom:1px black solid;
`;

export const InnerMenu = styled.div`
  background-color: brown;
  display: none;
  max-width: 70%;
      flex:0 0 70%;
`;

export const SubMenuInner = styled.div`
  margin-top: 4rem;
  background: ${({ theme }) => theme.colors.subMenuBg};
  width: 60vw;
  height:40vh;
  flex-direction: column;
  display: flex;
`

export const SubMenuItem = styled.li`
  padding:0.5rem;
  display: flex;
  &:hover ${InnerMenu}{
      display: block;
  }
  & > *:first-child {
      background-color: azure;
      max-width: 30%;
      flex:0 0 30%;
  }
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
    display: block;
  }

`;
