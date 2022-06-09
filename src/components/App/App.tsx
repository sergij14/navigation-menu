import Navigation from "../Navigation/Navigation";
import { AppContainer } from "./App.styles";

const navigationMenuData = [
  {
    label: "Menu1",
    subMenu: [
      {
        label: "Submenu1",
        innerMenus: [
          {
            title: "My career",
            items: [
              {
                label: "hrweb",
                href: "#",
              },
              {
                label: "benefits",
                href: "#",
              },
            ],
          },

          {
            title: "My career2",
            items: [
              {
                label: "hrweb",
                href: "#",
              },
              {
                label: "benefits",
                href: "#",
              },
            ],
          },
          {
            title: "My career 3",
            items: [
              {
                label: "hrweb",
                href: "#",
              },
              {
                label: "benefits",
                href: "#",
              },
            ],
          },
        ],
      },
      {
        label: "Submenu2",
        innerMenus: [
          {
            title: "My career",
            items: [
              {
                label: "hrweb",
                href: "#",
              },
              {
                label: "benefits",
                href: "#",
              },
            ],
          },

          {
            title: "My career2",
            items: [
              {
                label: "hrwsdgsdeb",
                href: "#",
              },
              {
                label: "benefsdgsdits",
                href: "#",
              },
            ],
          },
          {
            title: "My career 3sdgsdg",
            items: [
              {
                label: "hrweb",
                href: "#",
              },
              {
                label: "benefits",
                href: "#",
              },
            ],
          },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <AppContainer>
      <Navigation data={navigationMenuData} />
    </AppContainer>
  );
};

export default App;
