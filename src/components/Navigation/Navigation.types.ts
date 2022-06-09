export type NavigationMenuData = {
  data: {
    label: string;
    subMenu: {
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
