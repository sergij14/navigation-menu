import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  a {
    color: black;
  }

  a, a:focus, a:active {
      text-decoration: none;
  }

  a:hover{
    text-decoration: underline;
  }

  img {
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
  }
  
`;
