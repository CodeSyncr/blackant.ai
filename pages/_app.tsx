import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../context";
import React from "react";
import Navbar from "../components/header";
import Header from "../components/generals/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Header />
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
