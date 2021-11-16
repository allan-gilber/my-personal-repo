import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./img/backgroundimage.png";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fffffe;
  background-image: url(${BackgroundImage});
}
div{
  height: 100%;
  width: 100%;
}
`;