import React, { useEffect, useRef, useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Section2Content1 from "../generals/section2Content1";
import Section2Content2 from "../generals/Section2Content2";
import { motion } from "framer-motion";
import { anim_x, springTrans } from "../../utils/animation_variants";
import { useSection } from "../../context";
import { SectionProps } from "./Types";
import Heading from "../generals/Heading";
import Paragraph from "../generals/Paragraph";

const Section2b = ({ variants, initial, animate, exit }: SectionProps) => {
  const data = sectionsData.section2.content2;
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      e.preventDefault();
      let delta = Math.sign(e.deltaY);
      const bottom = delta > 0;
      if (bottom) {
        dispatch({ type: "SEC-2c" });
      } else {
        dispatch({ type: "SEC-2a" }); // experimenting
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={state.sec2itm1 ? "hidden" : "show"}
      variants={anim_x}
      transition={{
        ...springTrans,
        delay: state.sec2itm1 ? 0.7 : 0.3,
      }}
      className="s2_b absolute inset-0 pt-[5rem] flex flex-col justify-center items-center transition-all"
    >
      <Heading
        data={data?.txt1}
        className="md:-mt-8 lg:pl-[15%]"
        variants={variants}
        delay={0.4}
        initial={initial}
        animate={animate}
        animatable
      />

      <Heading
        data={data?.txt2}
        className="text-baOrange lg:pl-[30%] md:-mt-8 mb-[2rem]"
        variants={variants}
        delay={0.5}
        initial={initial}
        animate={animate}
        animatable
      />
      <Paragraph
        data={data?.placeHolderTxt}
        className="font-manrSemiBold text-[1.3rem] break-normal mb-[2rem] md:pl-[10%] lg:pl-[30%] md:pr-[20vw]"
        variants={variants}
        delay={0.6}
        initial={initial}
        animate={animate}
        animatable
      />
    </motion.div>
  );
};

export default Section2b;
