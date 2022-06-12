import { v4 as uuidv4 } from "uuid";
import { NavigationMenuData } from "../components/Navigation/Navigation.types";

export function generateDataWithIDs(data: NavigationMenuData['menus']): NavigationMenuData['menus'] {
  let menuData;
  menuData = data.map((menu) => {
    return {
      ...menu,
      id: uuidv4(),
      subMenus: menu.subMenus.map((subMenu) => {
        return {
          ...subMenu,
          id: uuidv4(),
          innerMenus: subMenu.innerMenus.map((innerMenu) => {
            return {
              ...innerMenu,
              id: uuidv4(),
              items: innerMenu.items.map((innerItem) => {
                return {
                  ...innerItem,
                  id: uuidv4(),
                };
              }),
            };
          }),
        };
      }),
    };
  });
  return menuData;
}