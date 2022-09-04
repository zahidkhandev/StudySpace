import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  defaultTheme,
} from "../utils/ThemeConfig";
import { createRoot } from "react-dom/client";
import { hop } from "@onehop/client";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    hop.init({
      projectId: "project_NTA0NDIzMDExNTAwMTE1MTU",
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
