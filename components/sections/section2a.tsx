import React, { useEffect, useRef, useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Section2Content1 from "../generals/section2Content1";
import Section2Content2 from "../generals/Section2Content2";
import { motion } from "framer-motion";
import { anim_x, spring, springTrans } from "../../utils/animation_variants";
import { useSection } from "../../context";
import { SectionProps } from "./Types";
import Heading from "../generals/heading";
import Paragraph from "../generals/paragraph";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import useWindowDimensions from "../../utils/useWindowSize";
import { debounce } from "lodash";

const Section2a = ({ variants, initial, animate }: SectionProps) => {
  const data = sectionsData.section2.content1;
  const { width } = useWindowDimensions();
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();

  useEffect(() => {
    const element = ref.current;
    element.addEventListener(
      "wheel",
      debounce((e) => {
        e.preventDefault();
        let delta = Math.sign(e.deltaY);
        const bottom = delta > 0;
        if (bottom) {
          dispatch({ type: "SEC-2b" });
        } else {
          dispatch({ type: "SEC-1" });
        }
      }, 300)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      variants={{ ...variants }}
      transition={{
        ...springTrans,
        delay: state.sec2itm1 ? 0.1 : 0.9,
      }}
      className="s2_a absolute inset-0 pt-[5rem] flex flex-col justify-center items-center transition-all px-8"
    >
      <Heading
        data={data?.txt1}
        className="md:-mt-8 lg:pl-[15%]"
        variants={variants}
        delay={0.2}
        initial={initial}
        animate={animate}
        animatable
      />
      <Heading
        data={data?.txt2}
        className="text-baOrange lg:pl-[30%] md:-mt-8"
        variants={variants}
        delay={0.3}
        initial={initial}
        animate={animate}
        animatable
      />
      <Heading
        data={data?.txt3}
        className=" md:-mt-8 lg:pl-[15%]"
        variants={variants}
        delay={0.4}
        initial={initial}
        animate={animate}
        animatable
      />
      <Heading
        data={data?.txt2}
        className=" pb-[2rem] lg:pl-[30%] md:-mt-8"
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
      <Paragraph
        data={data?.placeHolderTxt}
        className="font-manrRegular text-[1rem] break-normal md:pl-[10%] lg:pl-[30%] md:pr-[20vw] mb-[2rem] "
        variants={variants}
        delay={0.7}
        initial={initial}
        animate={animate}
        animatable
      />
      <motion.div
        initial={initial}
        animate={animate}
        variants={{ ...variants }}
        transition={spring(0.8)}
        className="absolute bottom-2 right-4 md:bottom-8 md:right-16 z-50"
      >
        {state.sec2 && (
          <RotateTextCompSvg
            black={state.navBlack}
            size={width < 800 ? 8 : 10}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Section2a;
