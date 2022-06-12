import { useEffect, useMemo, useState } from "react";
import { NavigationMenuData } from "./Navigation.types";
import TypedLocalStore from "typed-local-store";
import dummyData from "../../dummyData.json";
import { generateDataWithIDs } from "../../utils/generateDataWithIDs";

const useNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<string>();
  const typedStorage = useMemo(
    () => new TypedLocalStore<NavigationMenuData>(),
    []
  );

  useEffect(() => {
    if (!typedStorage.getItem("menus")) {
      typedStorage.setItem("menus", generateDataWithIDs(dummyData));
    }
  }, [typedStorage]);

  return {
    typedStorage,
    activeSubMenu,
    setActiveSubMenu,
  };
};

export default useNavigation;
