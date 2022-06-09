import React from "react";
import {
  InnerMenu,
  InnerMenuContent,
  InnerMenuItem,
  InnerMenuItems,
  InnerMenuTitle,
  MenuContainer,
  MenuItem,
  MenuItemText,
  NavigationContainer,
  SubMenuContainer,
  SubMenuInner,
  SubMenuItem,
  SubMenuItemContents,
  SubMenuItems,
} from "./Navigation.styles";
import { NavigationMenuData } from "./Navigation.types";
import useNavigation from "./useNavigation";

const Navigation = ({ data }: NavigationMenuData) => {
  const { activeSubMenu, setActiveSubMenu } = useNavigation();

  return (
    <NavigationContainer>
      <MenuContainer>
        {data.map(({ label, subMenu }, i) => (
          <MenuItem key={label + i}>
            <MenuItemText>{label}</MenuItemText>
            <SubMenuContainer>
              <SubMenuInner>
                <SubMenuItems>
                  {subMenu.map(({ label }, i) => (
                    <SubMenuItem
                      key={label + i}
                      isSelected={activeSubMenu === i}
                      onMouseOver={() => setActiveSubMenu(i)}
                    >
                      {label}
                    </SubMenuItem>
                  ))}
                </SubMenuItems>

                <SubMenuItemContents>
                  {subMenu.map(({ innerMenus, label }, i) => (
                    <InnerMenu
                      key={label + i}
                      isVisible={activeSubMenu === i}
                      onMouseOver={() => setActiveSubMenu(i)}
                    >
                      {innerMenus.map(({ title, items }) => (
                        <InnerMenuContent key={title + i}>
                          <InnerMenuTitle>{title}</InnerMenuTitle>
                          <InnerMenuItems>
                            {items.map(({ label, href }, i) => (
                              <InnerMenuItem key={label + i}>
                                <a href={href}>{label}</a>
                              </InnerMenuItem>
                            ))}
                          </InnerMenuItems>
                        </InnerMenuContent>
                      ))}
                    </InnerMenu>
                  ))}
                </SubMenuItemContents>
              </SubMenuInner>
            </SubMenuContainer>
          </MenuItem>
        ))}
      </MenuContainer>
    </NavigationContainer>
  );
};

export default Navigation;
