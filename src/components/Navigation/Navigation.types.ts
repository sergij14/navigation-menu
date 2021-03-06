export type NavigationMenuData = {
  menus: {
    label: string;
    id?: string;
    link: string;
    subMenus: {
      link: string;
      id?: string;
      label: string;
      innerMenus: {
        id?: string;
        title: string;
        items: {
          id?: string;
          label: string;
          link: string;
        }[];
      }[];
    }[];
  }[];
};
