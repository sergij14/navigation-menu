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

export const MenuIconContainer = styled.div`
  width: 2.4rem;
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuItemText = styled.span``;

export const SubMenuContainer = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
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
  align-self: stretch;
  justify-self: stretch;
`;

export const SubMenuItem = styled.li<{ isSelected: boolean }>`
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: ${({ isSelected }) =>
    isSelected ? "white" : "transparent"};
  &:hover {
    background-color: white;
  }
`;

export const MenuItem = styled.li`
  align-self: flex-start;
  justify-self: flex-start;
  padding: 1rem 1.5rem;
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.colors.subMenuBg};
  }
  &:hover ${MenuItemText} {
    color: ${({ theme }) => theme.colors.border};
  }
  &:hover ${SubMenuContainer} {
    display: block;
  }
`;
