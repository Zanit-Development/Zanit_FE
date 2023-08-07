import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../assets/font.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #F14C29;
    --sub-color: #FF6949;
    --white-color: #FFFFFF;
    --white-sub-color: #FEF6F4;
    --gray100-color: #F8F8F8;
    --gray200-color: #D7D7D7;
    --gray300-color: #C4C4C4;
    --gray400-color: #8C8C8C;
    --gray500-color: #777;
    --black-color: #000000;
  }

  :root {
    --font--Bold: 'Noto-Sans-700';
    --font--semibold: 'Noto-Sans-500';
    --font--Medium: 'Noto-Sans-400';
    --font--Regular: 'Noto-Sans-300';
  }

  ${reset}

  body {
    font-family: var(--font--Regular);
    background: #D9D9D9;
    color: #121212;
  }

  input {
    all: unset;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    all: unset;
  }

  img {
    vertical-align: top;
  }

  a {
    color: var(--black-color);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyle;
