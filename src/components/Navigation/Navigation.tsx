import React from "react";
import { Link } from "react-router-dom";
import {
  InnerMenu,
  InnerMenuContent,
  InnerMenuItem,
  InnerMenuItems,
  InnerMenuTitle,
  MenuContainer,
  MenuIconContainer,
  MenuItem,
  MenuItems,
  MenuItemText,
  NavigationContainer,
  SubMenuContainer,
  SubMenuInner,
  SubMenuItem,
  SubMenuItemContents,
  SubMenuItems,
} from "./Navigation.styles";
import useNavigation from "./useNavigation";
import { MenuIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { Message } from "../App/App.styles";

const Navigation = () => {
  const { activeSubMenu, setActiveSubMenu, typedStorage } = useNavigation();
  const menus = typedStorage.getItem("menus") || [];

  return (
    <>
      <NavigationContainer>
        <MenuContainer>
          <MenuIconContainer>
            <MenuIcon />
          </MenuIconContainer>
          <MenuItems>
            {menus?.map(({ label, subMenus, id: menuId }, i) => (
              <MenuItem
                key={menuId}
                onMouseLeave={() =>
                  activeSubMenu && setActiveSubMenu(undefined)
                }
              >
                <MenuItemText>{label}</MenuItemText>
                <SubMenuContainer>
                  <SubMenuInner>
                    <SubMenuItems>
                      {subMenus?.map(({ label, id: subMenuId }, i) => (
                        <SubMenuItem
                          key={subMenuId}
                          isSelected={activeSubMenu === subMenuId}
                          onMouseOver={() => setActiveSubMenu(subMenuId)}
                        >
                          {label}
                        </SubMenuItem>
                      ))}
                    </SubMenuItems>

                    <SubMenuItemContents>
                      {subMenus?.map(
                        ({ innerMenus, label, id: subMenuId }, i) => (
                          <InnerMenu
                            key={subMenuId + label}
                            isVisible={activeSubMenu === subMenuId}
                            onMouseOver={() => setActiveSubMenu(subMenuId)}
                          >
                            {innerMenus?.map(
                              ({ title, items, id: innerMenuId }) => (
                                <InnerMenuContent key={innerMenuId}>
                                  <InnerMenuTitle>{title}</InnerMenuTitle>
                                  <InnerMenuItems>
                                    {items?.map(
                                      ({ label, href, id: innerItemId }) => (
                                        <InnerMenuItem key={innerItemId}>
                                          <a href={href}>{label}</a>
                                        </InnerMenuItem>
                                      )
                                    )}
                                  </InnerMenuItems>
                                </InnerMenuContent>
                              )
                            )}
                          </InnerMenu>
                        )
                      )}
                      {!activeSubMenu && (
                        <Message>Please hover on submenu item</Message>
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
          </MenuItems>
          <MenuIconContainer>
            <DotsHorizontalIcon />
          </MenuIconContainer>
        </MenuContainer>
      </NavigationContainer>
      {menus && menus.length > 0 && (
        <Message>
          To change menu items please go to <Link to="settings">Settings</Link>
        </Message>
      )}
    </>
  );
};

export default Navigation;
