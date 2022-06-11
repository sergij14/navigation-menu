import { useState } from "react";
import { NavigationMenuData } from "./Navigation.types";
import TypedLocalStore from "typed-local-store";

const useNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<undefined | number>();
  const typedStorage = new TypedLocalStore<NavigationMenuData>();

  return {
    typedStorage,
    activeSubMenu,
    setActiveSubMenu,
  };
};

export default useNavigation;
