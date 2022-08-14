import { motion } from "framer-motion";
import React from "react";
import {
  hidden_right,
  variantTypes,
  visible_right,
} from "../../utils/animation_variants";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface Section2Content2Props {
  data: {
    txt1: string;
    txt2: string;
    placeHolderTxt: string;
  };
  variants?: variantTypes;
  initial: string;
  animate: string;
}

const Section2Content2 = ({
  data,
  variants,
  initial,
  animate,
}: Section2Content2Props) => {
  return (
    <>
      <Heading
        data={data.txt1}
        className="md:-mt-8 lg:pl-[15%]"
        variants={variants}
        delay={0.2}
        initial={initial}
        animate={animate}
        animatable
      />

      <Heading
        data={data.txt2}
        className="text-baOrange lg:pl-[30%] md:-mt-8 mb-[2rem]"
        variants={variants}
        delay={0.3}
        initial={initial}
        animate={animate}
        animatable
      />
      <Paragraph
        data={data.placeHolderTxt}
        className="font-manrSemiBold text-[1.3rem] break-normal mb-[2rem] md:pl-[10%] lg:pl-[30%] md:pr-[20vw]"
        variants={variants}
        delay={0.4}
        initial={initial}
        animate={animate}
        animatable
      />
    </>
  );
};

export default Section2Content2;
