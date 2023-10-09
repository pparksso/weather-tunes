import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    overflow-x: hidden;
}
button {
    padding: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: inherit;
    display: inline-flex;
}
a {
    text-decoration: none;
    color: inherit;
}
img {
      max-width: 100%;
      height: auto;
    }
`;
