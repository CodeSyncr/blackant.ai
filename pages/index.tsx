import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/header";
import Section1 from "../components/sections/section1";
import Section2 from "../components/sections/section2";
import Section3 from "../components/sections/section3";
import Section4 from "../components/sections/section4";
import Section5 from "../components/sections/section5";
import { AnimatePresence, motion } from "framer-motion";
import {
  anim_y,
  DIRECTION_VARIANT,
  screenSpringTransition,
} from "../utils/animation_variants";
import { useSection } from "../context";
import StickyContactUs from "../components/generals/sm_sticky_contact";
import React, { useEffect, useState } from "react";
import RotateTextCompSvg from "../components/generals/RotateTextCompSvg";
import useWindowDimensions from "../utils/useWindowSize";

const Home: NextPage = () => {
  const { state } = useSection();
  const { width } = useWindowDimensions();
  return (
    <>
      <Head>
        <title>blackant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <header className="fixed w-full z-50">
        <Navbar black={state.navBlack} />
      </header>

      <main className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          {state.contactUs && (
            <div className="absolute bottom-2 right-4 md:bottom-8 md:right-16 z-50">
              <RotateTextCompSvg
                black={state.navBlack}
                size={width < 800 ? 8 : 12}
              />
            </div>
          )}
          {state.sec1 && (
            <motion.div
              key={"sec1"}
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "-100vh" }}
              transition={screenSpringTransition}
              className="absolute inset-0"
            >
              <Section1 />
            </motion.div>
          )}

          {state.sec2 && (
            <motion.div
              key={"sec2"}
              initial={{ y: "100vh" }}
              animate={!state.sec1 ? { y: "0" } : { y: "100vh" }}
              exit={{ x: "-100vw", y: "0" }}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden"
            >
              <Section2 />
            </motion.div>
          )}

          {state.sec3 && (
            <motion.div
              key={"sec3"}
              className={"absolute inset-0 overflow-hidden h-screen"}
            >
              <Section3 />
            </motion.div>
          )}

          {state.sec4 && (
            <motion.div
              key={"sec4"}
              initial={{ x: "100vw" }}
              animate={{ x: "0" }}
              exit={{ x: "-100vw" }}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden h-screen"
            >
              <Section4 />
            </motion.div>
          )}
          {state.sec5 && (
            <motion.div
              key={"sec5"}
              initial={{ x: 0, y: 0 }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: 0, y: "100vh" }}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden h-screen"
            >
              <Section5 />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
