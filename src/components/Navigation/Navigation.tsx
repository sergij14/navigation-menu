import React from "react";
import {
  InnerMenu,
  MenuContainer,
  MenuItem,
  MenuItemText,
  NavigationContainer,
  SubMenuContainer,
  SubMenuInner,
  SubMenuItem,
  SubMenuItemText,
} from "./Navigation.styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <MenuContainer>
        <MenuItem>
          <MenuItemText>Menu1</MenuItemText>
          <SubMenuContainer>
            <SubMenuInner>
              <SubMenuItem>
                <SubMenuItemText>Submenu1</SubMenuItemText>
                <InnerMenu>inner menu 1</InnerMenu>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuItemText>Submenu2</SubMenuItemText>
                <InnerMenu>inner menu 2</InnerMenu>
              </SubMenuItem>
            </SubMenuInner>
          </SubMenuContainer>
        </MenuItem>
        <MenuItem>
          <MenuItemText>Menu2</MenuItemText>
          <SubMenuContainer>
            <SubMenuInner>
              <SubMenuItem>
                <SubMenuItemText>menu2 -Submenu2</SubMenuItemText>
                <InnerMenu>inner menu 1</InnerMenu>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuItemText>menu2 - Submenu2</SubMenuItemText>
                <InnerMenu>inner menu 2</InnerMenu>
              </SubMenuItem>
            </SubMenuInner>
          </SubMenuContainer>
        </MenuItem>
      </MenuContainer>
    </NavigationContainer>
  );
};

export default Navigation;
