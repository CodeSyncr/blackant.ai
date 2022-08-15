import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/header";
import Section1 from "../components/sections/section1";
import Section2 from "../components/sections/section2";
import Section3 from "../components/sections/section3";
import Section4 from "../components/sections/section4";
import Section5 from "../components/sections/section5";
import Section6 from "../components/sections/section6";
import Section7 from "../components/sections/section7";
import Section8 from "../components/sections/section8";
import useIntersectionObserver from "../utils/interSectionHook";
import { useInView } from "react-intersection-observer";
import SnapContainer from "../components/generals/SnapContainer";
import SectionContainer from "../components/generals/SectionContainer";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  anim_x,
  anim_x0y1,
  anim_x1y0,
  anim_y,
  containerSpringTransition,
  hidden_bottom,
  hidden_left,
  screenSpringTransition,
  visible_bottom,
} from "../utils/animation_variants";

const Home: NextPage = () => {
  const [black, setBlack] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);
  const [onTopY, setOnTopY] = useState(false);
  const [sections, setSections] = useState({
    sec1: true,
    sec2: false,
    sec2exit: false,
    sec3: false,
    sec4: false,
    sec4exit: false,
    sec5: false,
    footer: false,
  });

  return (
    <>
      <Head>
        <title>blackant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>
      <header className="fixed w-full z-50">
        <Navbar black={black} />
      </header>
      <main>
        <motion.div
          ref={ref}
          className="h-screen w-screen relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 z-50"
            initial={"show"}
            animate={sections.sec1 ? "show" : "exit"}
            transition={screenSpringTransition}
            variants={anim_y}
          >
            <Section1 sections={sections} setSections={setSections} />
          </motion.div>

          {sections.sec2 && (
            <motion.div
              className="absolute w-full h-full z-10"
              initial={"hidden"}
              animate={sections.sec2 ? "show" : "hidden"}
              transition={screenSpringTransition}
              variants={anim_x0y1}
            >
              <Section2 sections={sections} setSections={setSections} />
            </motion.div>
          )}

          {sections.sec3 && (
            <motion.div
              className="absolute w-full h-full z-10"
              initial={"show"}
              animate={sections.sec3 ? "exit" : "show"}
              transition={screenSpringTransition}
              variants={anim_x1y0}
            >
              <Section2 sections={sections} setSections={setSections} />
            </motion.div>
          )}

          {/* ===========work start here========== */}
          {/* sec-2 is true then? */}

          {sections.sec4 && (
            <motion.div
              initial={"show"}
              animate={sections.sec4exit ? "exit" : "show"}
              variants={anim_x}
              className="absolute w-full h-full section-4"
            >
              <Section5 setSections={setSections} sections={sections} />
            </motion.div>
          )}

          <motion.div
            initial={"show"}
            animate={sections.sec5 ? "show" : "hidden"}
            variants={anim_x}
            className="absolute w-full h-full section-5"
          >
            <Section6 setSections={setSections} sections={sections} />
          </motion.div>
        </motion.div>

        {/* <SnapContainer ref={ref}>
          <SectionContainer full>
            <Section1 />
          </SectionContainer>

          <SectionContainer full>
            <Section2 />
          </SectionContainer>

          <SectionContainer full>
            <Section3 />
          </SectionContainer>

          <SectionContainer full>
            <Section4 />
          </SectionContainer>

          <SectionContainer full>
            <Section5 />
          </SectionContainer>

          <SectionContainer full>
            <Section6 />
          </SectionContainer>

          <SectionContainer full>
            <Section7 />
          </SectionContainer>
        </SnapContainer> */}
      </main>

      <footer>
        <motion.div>{/* <Section8 /> */}</motion.div>
      </footer>
    </>
  );
};

export default Home;
