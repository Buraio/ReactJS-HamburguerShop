import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;

    --gray-1: #333333;
    --gray-2: #828282;
    --gray-3: #e0e0e0;
    --gray-4: #f5f5f5;

    --font-family: "Inter", sans-serif;

    --font-size-1: 1.625rem;
    --font-size-2: 1.375rem;
    --font-size-3: 1.125rem;
    --font-size-4: 1rem;
    --font-size-5: 0.875rem;
    --font-size-6: 0.75rem;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul, ol, li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, small, li, button, input{
    font-family: 'Inter', sans-serif;
  }

  body, .App {
    height: 100vh;
  }

  @media (min-width: 1100px) {

    body {
      overflow: hidden;
    }

  }

`;

export default GlobalStyles;
