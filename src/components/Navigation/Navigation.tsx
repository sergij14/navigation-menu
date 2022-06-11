import React from "react";
import { Link } from "react-router-dom";
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
import useNavigation from "./useNavigation";

const Navigation = () => {
  const { activeSubMenu, setActiveSubMenu, typedStorage } = useNavigation();
  const menus = typedStorage.getItem('menus') || [];

  return (
    <NavigationContainer>
      <MenuContainer>
        {menus?.map(({ label, subMenus }, i) => (
          <MenuItem key={label + i}>
            <MenuItemText>{label}</MenuItemText>
            <SubMenuContainer>
              <SubMenuInner>
                <SubMenuItems>
                  {subMenus.map(({ label }, i) => (
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
                  {subMenus.map(({ innerMenus, label }, i) => (
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
        {menus && !menus.length && (
          <p>
            There are no menu items. Please go to{" "}
            <Link to="settings">Settings</Link>
          </p>
        )}
      </MenuContainer>
    </NavigationContainer>
  );
};

export default Navigation;
