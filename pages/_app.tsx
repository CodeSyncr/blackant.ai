import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../context";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
