import { createGlobalStyle } from "styled-components";

/* npm i styles-reset */
import reset from "styles-reset";

export const ligtTheme = {
  fontColor: "red",
  bgColor: "lightyellow",
  borderColor: "black",
};

export const darkTheme = {
  fontColor: "black",
  bgColor: "#c2c2c2",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  input{
    all:unset;
  }
  .Loginbtn{
    text-align: center;
    background-color: #4B89DC;
    border-radius: 5px;
  }
  body{
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    // color: ${(props) => props.theme.fontColor};
    // background-color: ${(props) => props.theme.bgColor};
  }

`