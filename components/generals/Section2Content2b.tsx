import React, { useEffect, useRef } from "react";
import { useSection } from "../../context";

import { SectionProps } from "../sections/Types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Section2Content2b = ({
  data,
  variants,
  initial,
  animate,
  items,
  exit,
}: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        dispatch({ type: "SEC-2b" });
      } else {
        dispatch({ type: "SEC-2a_curious" }); // experimenting
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
  return (
    <div
      ref={ref}
      className="px-8 h-full flex justify-center items-center flex-col"
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

export default Section2Content2b;
