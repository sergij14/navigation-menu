import { useEffect, useState } from "react";
import { NavigationMenuData } from "./Navigation.types";
import TypedLocalStore from 'typed-local-store';

const useNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<undefined | number>();
  const [data, setData] = useState<NavigationMenuData['menus']>();
  const typedStorage = new TypedLocalStore<NavigationMenuData>();

  useEffect(() => {
    const menuData = typedStorage.getItem('menus');
    setData(menuData || [])
  }, [])

  return {
    menus: data,
    typedStorage,
    activeSubMenu,
    setActiveSubMenu,
  };
};

export default useNavigation;
