import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/header";
import Section1 from "../components/sections/section1";
import Section3 from "../components/sections/section3";
import Section5 from "../components/sections/section5";
import { AnimatePresence, motion } from "framer-motion";
import {
  anim_x,
  anim_y,
  screenSpringTransition,
  springTrans,
} from "../utils/animation_variants";
import { useSection } from "../context";
import React from "react";
import Section2a from "../components/sections/section2a";
import Section2b from "../components/sections/section2b";
import Container from "../components/generals/Container";
import { sectionsData } from "../modules/sections";
import VerticleCardsComp from "../components/generals/VerticleCardsComp";
import Section4Content1 from "../components/generals/Section4Content1";
import Section4Content2 from "../components/generals/Section4Content2";

const Home: NextPage = () => {
  const { state } = useSection();

  return (
    <>
      <Head>
        <title>blackant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <header className="fixed w-full z-50 ">
        <Navbar black={state.navBlack} />
      </header>

      <main className="relative w-screen h-screen overflow-hidden">
        <AnimatePresence initial={false}>
          {state.sec1 && (
            <motion.div
              key={"sec1"}
              initial={"exit"}
              animate={state.sec1a ? "show" : "exit"}
              variants={anim_y}
              exit={"hidden"}
              transition={screenSpringTransition}
              className="absolute inset-0"
              style={{
                zIndex: state.sec3 ? 0 : 10,
              }}
            >
              <Section1 />
            </motion.div>
          )}

          {state.sec2 ? (
            <motion.div
              key={"sec2a1"}
              initial={"hidden"}
              animate={state.sec1a ? "hidden" : state.sec5 ? "hidden" : "show"}
              variants={anim_y}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden z-10"
            >
              <Container
                navblack={state.navBlack}
                className="bg-baCream w-screen"
              >
                {""}
              </Container>
            </motion.div>
          ) : (
            <motion.div
              key={"sec2b1"}
              animate={state.sec2c ? "show" : "exit"}
              variants={anim_x}
              exit={"exit"}
              transition={{ ...screenSpringTransition, duration: 0.2 }}
              className="absolute inset-0 overflow-hidden z-30 "
            >
              <Container
                navblack={state.navBlack}
                className="bg-baCream w-screen"
              >
                {""}
              </Container>
            </motion.div>
          )}

          {state.sec2a && (
            <motion.div
              key={"sec2a"}
              initial={"hidden"}
              animate={state.sec1a ? "hidden" : "show"}
              variants={anim_y}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] px-8 z-10"
            >
              <Section2a
                initial={"show"}
                animate={state.sec2itm1 ? "show" : "exit"}
                variants={anim_x}
              />
            </motion.div>
          )}

          {state.sec2b && (
            <motion.div
              key={"sec2b"}
              initial={"hidden"}
              animate={state.sec2itm1 ? "hidden" : "show"}
              variants={anim_x}
              transition={{
                ...springTrans,
                delay: state.sec2itm1 ? 0.8 : 0.3,
              }}
              className="absolute inset-0  overflow-hidden text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] px-8 z-10"
            >
              {!state.sec2itm2exit ? (
                <Section2b
                  initial={"hidden"}
                  animate={state.sec2itm1 ? "hidden" : "show"}
                  variants={anim_x}
                />
              ) : (
                <Section2b
                  initial={"show"}
                  animate={"exit"}
                  variants={anim_x}
                />
              )}
            </motion.div>
          )}

          {state.sec2c && (
            <>
              <motion.div className="s2_item3 absolute bottom-0 w-full min-h-full flex flex-col justify-center items-center overflow-hidden z-40">
                <VerticleCardsComp data={sectionsData.section2.content3} />
              </motion.div>
              <div className="absolute bg-baScrnBlack w-full opacity-30 h-full top-0 z-30"></div>
            </>
          )}
          {state.sec3 && (
            <motion.div
              key={"sec3"}
              className={"absolute inset-0 overflow-hidden h-screen z-[5]"}
            >
              <Section3 />
            </motion.div>
          )}

          {state.sec4 && (
            <motion.div
              key={"sec4"}
              initial={"hidden"}
              animate={state.sec4itm1 ? "show" : "hidden"}
              exit={"exit"}
              variants={anim_x}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden h-screen z-40"
            >
              <Container
                navblack={state.navBlack}
                className="bg-baCream text-baBlack font-fracRegular w-screen overflow-hidden"
              >
                <motion.div
                  initial={"show"}
                  animate={state.sec4itm2 ? "exit" : "show"}
                  variants={anim_y}
                  transition={screenSpringTransition}
                  className="absolute inset-0 overflow-hidden "
                >
                  <Section4Content1
                    initial={"hidden"}
                    animate={state.sec4itm1 ? "show" : "hidden"}
                    variants={anim_x}
                  />
                </motion.div>

                <motion.div
                  initial={"hidden"}
                  animate={state.sec4itm2 ? "show" : "hidden"}
                  variants={anim_y}
                  transition={screenSpringTransition}
                  className="absolute w-full h-full pt-[5rem] flex flex-col justify-center items-center "
                >
                  <Section4Content2 />
                </motion.div>
              </Container>
            </motion.div>
          )}

          {state.sec5 && (
            <motion.div
              key={"sec5"}
              initial={"exit"}
              animate={"show"}
              exit={"hidden"}
              variants={anim_y}
              transition={screenSpringTransition}
              className="absolute inset-0 overflow-hidden h-screen z-10"
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
