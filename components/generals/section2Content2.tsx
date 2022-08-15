import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  hidden_right,
  variantTypes,
  visible_right,
} from "../../utils/animation_variants";
import { SectionProps } from "../sections/Types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Section2Content2 = ({
  data,
  variants,
  initial,
  animate,
  items,
  setItems,
  sections,
  setSections,
  exit,
}: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        setTimeout(() => {
          setItems?.((prev) => ({
            ...prev,
            item2: false,
            item3: true,
            item4: true,
          }));
        }, 500);
      } else {
        setItems?.((prev) => ({ ...prev, item2: false, item1: true }));
      }
    });
  }, [items]);
  return (
    <div ref={ref}>
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
        className="text-baOrange lg:pl-[30%] md:-mt-8 mb-[2rem]"
        variants={variants}
        delay={0.3}
        initial={initial}
        animate={animate}
        animatable
      />
      <Paragraph
        data={data?.placeHolderTxt}
        className="font-manrSemiBold text-[1.3rem] break-normal mb-[2rem] md:pl-[10%] lg:pl-[30%] md:pr-[20vw]"
        variants={variants}
        delay={0.4}
        initial={initial}
        animate={animate}
        animatable
      />
    </div>
  );
};

export default Section2Content2;
