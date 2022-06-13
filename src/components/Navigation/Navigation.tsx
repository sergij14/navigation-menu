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
  MenuItemLink,
  MenuItems,
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
            {menus?.map(
              ({ label, link: menuLink, subMenus, id: menuId }, i) => (
                <MenuItem key={menuId}>
                  <MenuItemLink
                    onMouseOver={() =>
                      setActiveSubMenu(menus[i]?.subMenus[0]?.id)
                    }
                    to={`${menuLink}`}
                  >
                    {label}
                  </MenuItemLink>
                  <SubMenuContainer>
                    <SubMenuInner>
                      <SubMenuItems>
                        {subMenus?.map(
                          ({ label, link: subMenuLink, id: subMenuId }, i) => (
                            <SubMenuItem
                              key={subMenuId}
                              isSelected={activeSubMenu === subMenuId}
                              onMouseOver={() => setActiveSubMenu(subMenuId)}
                            >
                              <Link to={`${subMenuLink}`}>{label}</Link>
                            </SubMenuItem>
                          )
                        )}
                      </SubMenuItems>

                      <SubMenuItemContents>
                        {subMenus?.map(
                          ({ innerMenus, label, id: subMenuId }, i) => (
                            <InnerMenu
                              key={subMenuId + label}
                              isVisible={activeSubMenu === subMenuId && innerMenus.length > 0}
                            >
                              {innerMenus?.map(
                                ({ title, items, id: innerMenuId }) => (
                                  <InnerMenuContent key={innerMenuId}>
                                    <InnerMenuTitle>{title}</InnerMenuTitle>
                                    <InnerMenuItems>
                                      {items?.map(
                                        ({ label, link, id: innerItemId }) => (
                                          <InnerMenuItem key={innerItemId}>
                                            <Link to={`${link}`}>{label}</Link>
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
                      </SubMenuItemContents>
                    </SubMenuInner>
                  </SubMenuContainer>
                </MenuItem>
              )
            )}
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
