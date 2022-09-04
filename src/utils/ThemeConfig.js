import { useState } from "react";
import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  text: "#64ffda",
  main: "#10002B",
  second: "#240046",
  third: "#3C096C",
  fourth: "#5A189A",
  fifth: "#7B2CBF",
  text: "#FCFCFF",
  grayDark: "#333648",
  grayLight: "#525561",
  transition: "200ms ease-in-out all",
};

export const lightTheme = {
  text: "#0A192F",
  background: "#eee",
  main: "#0A192F",
  scrollBackground: "#eee",
  scrollColor: "black",
};

export const defaultTheme = {
  padding: "20px",
  maxWidth: "1200px",
  width: "90%",
  text: "#FCFCFF",
  main: "#10002B",
  second: "#240046",
  third: "#3C096C",
  fourth: "#5A189A",
  fifth: "#7B2CBF",
  text: "#FCFCFF",
  grayDark: "#333648",
  grayLight: "#525561",
  transition: "200ms ease-in-out all",
  boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 25%)",
};

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;    
    transition: all 200ms linear;
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${({ theme }) => theme.scrollBackground};
    background-color: ${({ theme }) => theme.scrollBackground};
  }

  ::-webkit-scrollbar {
    width: 10px;  
    background-color: lightblue;
    /* background-color: ${(props) =>
      props.theme == "light" ? "black" : "#f5f5f5"}; */
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: ${({ theme }) => theme.scrollColor}
  }
  }

  a{
    font-family: 'Source Code Pro', monospace, Tahoma, Helvetica, Roboto, sans-serif;
  }

  *{
      padding: 0;
      margin: 0;
  }

`;
