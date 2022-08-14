import React, { useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import RotateTextComp from "./RotateTextComp";
import RotateTextCompSvg from "./RotateTextCompSvg";
import { motion } from "framer-motion";
import {
  hidden_left,
  spring,
  springTrans,
  variantTypes,
  visible_left,
} from "../../utils/animation_variants";

interface Section2Content1Props {
  data: {
    txt1: string;
    txt2: string;
    txt3: string;
    txt4: string;
    placeHolderTxt: string;
  };
  variants?: variantTypes;
  initial: string;
  animate: string;
}

const Section2Content1 = ({
  data,
  variants,
  initial,
  animate,
}: Section2Content1Props) => {
  return (
    <>
      <Heading
        data={data.txt1}
        className="md:-mt-8 lg:pl-[15%]"
        variants={variants}
        delay={0.1}
        initial={initial}
        animate={animate}
        animatable
      />
      <Heading
        data={data.txt2}
        className="text-baOrange lg:pl-[30%] md:-mt-8"
        variants={variants}
        delay={0.2}
        initial={initial}
        animate={animate}
        animatable
      />
      <Heading
        data={data.txt3}
        className=" md:-mt-8 lg:pl-[15%]"
        variants={variants}
        delay={0.3}
        initial={initial}
        animate={animate}
        animatable
      />
      <Heading
        data={data.txt2}
        className=" pb-[2rem] lg:pl-[30%] md:-mt-8"
        variants={variants}
        delay={0.4}
        initial={initial}
        animate={animate}
        animatable
      />

      <Paragraph
        data={data.placeHolderTxt}
        className="font-manrSemiBold text-[1.3rem] break-normal mb-[2rem] md:pl-[10%] lg:pl-[30%] md:pr-[20vw]"
        variants={variants}
        delay={0.5}
        initial={initial}
        animate={animate}
        animatable
      />
      <Paragraph
        data={data.placeHolderTxt}
        className="font-manrRegular text-[1rem] break-normal md:pl-[10%] lg:pl-[30%] md:pr-[20vw] mb-[2rem] "
        variants={variants}
        delay={0.6}
        initial={initial}
        animate={animate}
        animatable
      />

      <motion.div
        className="flex justify-center items-center lg:absolute bottom-8 right-16"
        variants={{ ...variants }}
        initial={initial}
        animate={animate}
        transition={{
          ...springTrans,
          delay: 0.7,
        }}
      >
        <RotateTextCompSvg black />
      </motion.div>
    </>
  );
};

export default Section2Content1;
