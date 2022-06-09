import "styled-components";

// creating declaration for typed styled-component theme

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      subMenuBg: string;
      border: string;
      button: string;
    };
  }
}
