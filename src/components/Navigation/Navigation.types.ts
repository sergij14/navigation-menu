export type NavigationMenuData = {
  menus: {
    label: string;
    subMenus: {
      label: string;
      innerMenus: {
        title: string;
        items: {
          label: string;
          href: string;
        }[];
      }[];
    }[];
  }[];
};
