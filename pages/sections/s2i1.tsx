import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/generals/Container";
import Heading from "../../components/generals/Heading";
import Paragraph from "../../components/generals/Paragraph";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";
import {
  anim_x,
  anim_y,
  screenSpringTransition,
  springTrans,
} from "../../utils/animation_variants";

const Sec1itm1 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();
  const data = sectionsData.section2.content1;

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        dispatch({ type: "SEC-2item1" });
      } else {
        dispatch({ type: "SEC-1" });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={"sec2a"}
        ref={ref}
        initial={"hidden"}
        animate={state.sec1 ? "hidden" : "show"}
        exit={"hidden"}
        variants={anim_y}
        transition={screenSpringTransition}
        className="absolute inset-0"
      >
        <Container
          navblack={state.navBlack}
          className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] transition-all"
        >
          <Heading
            data={data?.txt1}
            className="md:-mt-8 lg:pl-[15%]"
            delay={0.1}
            initial={"show"}
            animate={state.sec2itm1 ? "show" : "exit"}
            exit={"exit"}
            variants={anim_x}
            animatable
          />
          <Heading
            data={data?.txt2}
            className="text-baOrange lg:pl-[30%] md:-mt-8"
            delay={0.2}
            initial={"show"}
            animate={state.sec2itm1 ? "show" : "exit"}
            exit={"exit"}
            variants={anim_x}
            animatable
          />
          <Heading
            data={data?.txt3}
            className=" md:-mt-8 lg:pl-[15%]"
            delay={0.3}
            initial={"show"}
            animate={state.sec2itm1 ? "show" : "exit"}
            exit={"exit"}
            variants={anim_x}
            animatable
          />
          <Heading
            data={data?.txt2}
            className=" pb-[2rem] lg:pl-[30%] md:-mt-8"
            delay={0.4}
            initial={"show"}
            animate={state.sec2itm1 ? "show" : "exit"}
            exit={"exit"}
            variants={anim_x}
            animatable
          />

          <Paragraph
            data={data?.placeHolderTxt}
            className="font-manrSemiBold text-[1.3rem] break-normal mb-[2rem] md:pl-[10%] lg:pl-[30%] md:pr-[20vw]"
            delay={0.5}
            initial={"show"}
            animate={state.sec2itm1 ? "show" : "exit"}
            exit={"exit"}
            variants={anim_x}
            animatable
          />
          <Paragraph
            data={data?.placeHolderTxt}
            className="font-manrRegular text-[1rem] break-normal md:pl-[10%] lg:pl-[30%] md:pr-[20vw] mb-[2rem] "
            delay={0.6}
            initial={"show"}
            animate={state.sec2itm1 ? "show" : "exit"}
            exit={"exit"}
            variants={anim_x}
            animatable
          />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sec1itm1;
