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
  const menus = typedStorage.getItem("menus") || [];

  return (
    <NavigationContainer>
      <MenuContainer>
        {menus?.map(({ label, subMenus, id: menuId }) => (
          <MenuItem key={menuId}>
            <MenuItemText>{label}</MenuItemText>
            <SubMenuContainer>
              <SubMenuInner>
                <SubMenuItems>
                  {subMenus.map(({ label, id: subMenuId }, i) => (
                    <SubMenuItem
                      key={subMenuId}
                      isSelected={activeSubMenu === i}
                      onMouseOver={() => setActiveSubMenu(i)}
                    >
                      {label}
                    </SubMenuItem>
                  ))}
                </SubMenuItems>

                <SubMenuItemContents>
                  {subMenus.map(
                    ({ innerMenus, label, id: subMenuItemId }, i) => (
                      <InnerMenu
                        key={subMenuItemId + label}
                        isVisible={activeSubMenu === i}
                        onMouseOver={() => setActiveSubMenu(i)}
                      >
                        {innerMenus.map(({ title, items, id: innerMenuId }) => (
                          <InnerMenuContent key={innerMenuId}>
                            <InnerMenuTitle>{title}</InnerMenuTitle>
                            <InnerMenuItems>
                              {items.map(({ label, href, id: innerItemId }) => (
                                <InnerMenuItem key={innerItemId}>
                                  <a href={href}>{label}</a>
                                </InnerMenuItem>
                              ))}
                            </InnerMenuItems>
                          </InnerMenuContent>
                        ))}
                      </InnerMenu>
                    )
                  )}
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
