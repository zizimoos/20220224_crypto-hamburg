import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  colors: {
    mainBackgroundColor: "#708090",
    mainTextColor: "white",
    subTextColor: "white",
    secondary: "navy",
    boxLineColor: "dimGrey",
    boxHoverColor: "powerBlue",
  },
};

export const LightTheme: DefaultTheme = {
  colors: {
    mainBackgroundColor: "white",
    mainTextColor: "black",
    subTextColor: "white",
    secondary: "lightCyan",
    boxLineColor: "lightGrey",
    boxHoverColor: "teal",
  },
};
