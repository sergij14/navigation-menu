import React, { useState } from "react";
import {
  InnerMenu,
  InnerMenuContent,
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

const Navigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<undefined | number>();
  return (
    <NavigationContainer>
      <MenuContainer>
        <MenuItem>
          <MenuItemText>Menu1</MenuItemText>
          <SubMenuContainer>
            <SubMenuInner>
              <SubMenuItems>
                <SubMenuItem
                  isSelected={activeSubMenu === 1}
                  onMouseOver={() => setActiveSubMenu(1)}
                >
                  Menu1 - Submenu1
                </SubMenuItem>
                <SubMenuItem
                  isSelected={activeSubMenu === 2}
                  onMouseOver={() => setActiveSubMenu(2)}
                >
                  Menu1 - Submenu2
                </SubMenuItem>
              </SubMenuItems>

              <SubMenuItemContents>
                <InnerMenu
                  isVisible={activeSubMenu === 1}
                  onMouseOver={() => setActiveSubMenu(1)}
                >
                  <InnerMenuContent>
                  Submenu 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat in corporis asperiores sint! Facere consectetur ex
                    facilis eum magni ab maiores distinctio rem repudiandae
                    asperiores, perspiciatis veniam deleniti a. Quaerat! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    in corporis asperiores sint! Facere consectetur ex facilis
                    eum magni ab maiores distinctio rem repudiandae asperiores,
                    perspiciatis veniam deleniti a. Quaerat! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat in corporis
                    asperiores sint! Facere consectetur ex facilis eum magni ab
                    maiores distinctio rem repudiandae asperiores, perspiciatis
                    veniam deleniti a. Quaerat! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat in corporis asperiores
                    sint! Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat!
                  </InnerMenuContent>
                </InnerMenu>
                <InnerMenu
                  isVisible={activeSubMenu === 2}
                  onMouseOver={() => setActiveSubMenu(2)}
                >
                  <InnerMenuContent>
                  Submenu2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat in corporis asperiores sint! Facere consectetur ex
                    facilis eum magni ab maiores distinctio rem repudiandae
                    asperiores, perspiciatis veniam deleniti a. Quaerat! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    in corporis asperiores sint! Facere consectetur ex facilis
                    eum magni ab maiores distinctio rem repudiandae asperiores,
                    perspiciatis veniam deleniti a. Quaerat! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat in corporis
                    asperiores sint! Facere consectetur ex facilis eum magni ab
                    maiores distinctio rem repudiandae asperiores, perspiciatis
                    veniam deleniti a. Quaerat! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat in corporis asperiores
                    sint! Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet 
                    +.consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat!
                  </InnerMenuContent>
                </InnerMenu>
              </SubMenuItemContents>
            </SubMenuInner>
          </SubMenuContainer>
        </MenuItem>
        <MenuItem>
          <MenuItemText>Menu2</MenuItemText>
          <SubMenuContainer>
            <SubMenuInner>
              <SubMenuItems>
                <SubMenuItem
                  isSelected={activeSubMenu === 1}
                  onMouseOver={() => setActiveSubMenu(1)}
                >
                  Submenu1
                </SubMenuItem>
                <SubMenuItem
                  isSelected={activeSubMenu === 2}
                  onMouseOver={() => setActiveSubMenu(2)}
                >
                  Submenu2
                </SubMenuItem>
              </SubMenuItems>

              <SubMenuItemContents>
                <InnerMenu
                  isVisible={activeSubMenu === 1}
                  onMouseOver={() => setActiveSubMenu(1)}
                >
                  <InnerMenuContent>
                  Submenu1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat in corporis asperiores sint! Facere consectetur ex
                    facilis eum magni ab maiores distinctio rem repudiandae
                    asperiores, perspiciatis veniam deleniti a. Quaerat! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    in corporis asperiores sint! Facere consectetur ex facilis
                    eum magni ab maiores distinctio rem repudiandae asperiores,
                    perspiciatis veniam deleniti a. Quaerat! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat in corporis
                    asperiores sint! Facere consectetur ex facilis eum magni ab
                    maiores distinctio rem repudiandae asperiores, perspiciatis
                    veniam deleniti a. Quaerat! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat in corporis asperiores
                    sint! Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat!
                  </InnerMenuContent>
                </InnerMenu>
                <InnerMenu
                  isVisible={activeSubMenu === 2}
                  onMouseOver={() => setActiveSubMenu(2)}
                >
                  <InnerMenuContent>
                  Submenu2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat in corporis asperiores sint! Facere consectetur ex
                    facilis eum magni ab maiores distinctio rem repudiandae
                    asperiores, perspiciatis veniam deleniti a. Quaerat! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                    in corporis asperiores sint! Facere consectetur ex facilis
                    eum magni ab maiores distinctio rem repudiandae asperiores,
                    perspiciatis veniam deleniti a. Quaerat! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quaerat in corporis
                    asperiores sint! Facere consectetur ex facilis eum magni ab
                    maiores distinctio rem repudiandae asperiores, perspiciatis
                    veniam deleniti a. Quaerat! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat in corporis asperiores
                    sint! Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quaerat in corporis asperiores sint!
                    Facere consectetur ex facilis eum magni ab maiores
                    distinctio rem repudiandae asperiores, perspiciatis veniam
                    deleniti a. Quaerat!
                  </InnerMenuContent>
                </InnerMenu>
              </SubMenuItemContents>
            </SubMenuInner>
          </SubMenuContainer>
        </MenuItem>
      </MenuContainer>
    </NavigationContainer>
  );
};

export default Navigation;
