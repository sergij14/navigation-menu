import { useState } from "react";

const useNavigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<undefined | number>();

  return {
    activeSubMenu,
    setActiveSubMenu,
  };
};

export default useNavigation;
