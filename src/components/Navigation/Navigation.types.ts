export type NavigationMenuData = {
  menus: {
    label: string;
    id?: string,
    subMenus: {
      id?: string,
      label: string;
      innerMenus: {
        id?: string,
        title: string;
        items: {
          id?: string,
          label: string;
          href: string;
        }[];
      }[];
    }[];
  }[];
};
