/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import Container from "../../components/generals/Container";
import Cta from "../../components/generals/Cta";
import Heading from "../../components/generals/Heading";
import { useSection } from "../../context";
import { ctaData } from "../../modules/navlinks";
import { sectionsData } from "../../modules/sections";
import { anim_y, screenSpringTransition } from "../../utils/animation_variants";

const Sec1 = () => {
  const { state, dispatch } = useSection();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    dispatch({ type: "SEC-1" });
    const element = ref.current;
    element.addEventListener("wheel", (e: any) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        dispatch({ type: "SEC-2a" });
        router.push("/sections/s2i1");
      } else {
        dispatch({ type: "SEC-5" });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={"sec1"}
        ref={ref}
        initial={"show"}
        animate={state.sec1 ? "show" : "exit"}
        exit={"exit"}
        variants={anim_y}
        transition={screenSpringTransition}
        className="absolute inset-0"
      >
        <Container
          ref={ref}
          navblack={state.navBlack}
          className="s1_item1 bg-baScrnBlack text-baWhite flex-col text-center font-fracRegular text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] z-10"
        >
          <Heading
            data={sectionsData.section1.txt1}
            className="md:-mt-8 z-10"
            animatable={false}
          />
          <Heading
            data={sectionsData.section1.txt2}
            className="md:-mt-8 mb-[2rem] text-baOrange z-10"
            animatable={false}
          />
          <Cta
            text={ctaData.section1.text}
            className="border-none outline-none bg-baWhite text-baBlack font-bold p-4 px-10 flex justify-center items-center text-[1rem] font-manrBold z-10"
          />
          <div className="absolute inset-0 -z-10 overflow-hidden flex justify-center items-center">
            <img
              src="/images/hero.png"
              alt="hero"
              className="object-cover h-full "
            />
          </div>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sec1;
