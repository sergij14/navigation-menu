import { useEffect, useMemo, useState } from "react";
import { NavigationMenuData } from "./Navigation.types";
import TypedLocalStore from "typed-local-store";
import dummyData from "../../dummyData.json";
import { generateDataWithIDs } from "../../utils/generateDataWithIDs";

const menuDefaultData = generateDataWithIDs(dummyData);

const useNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<string>();
  const [menus, setMenus] = useState<NavigationMenuData["menus"]>();
  const typedStorage = useMemo(
    () => new TypedLocalStore<NavigationMenuData>(),
    []
  );

  useEffect(() => {
    const menusFromLS = typedStorage.getItem("menus");
    if (menusFromLS) {
      setMenus(menusFromLS);
    } else {
      typedStorage.setItem("menus", menuDefaultData);
      setMenus(menuDefaultData);
    }
  }, [typedStorage]);

  return {
    menus,
    typedStorage,
    activeSubMenu,
    setActiveSubMenu,
  };
};

export default useNavigation;
