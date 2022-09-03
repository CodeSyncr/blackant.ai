import React, { useEffect, useRef, useState } from "react";
import { sectionsData } from "../../modules/sections";
import { motion } from "framer-motion";
import {
  anim_x,
  spring,
  springTrans,
  springTransContainer,
} from "../../utils/animation_variants";
import { useSection } from "../../context";
import { SectionProps } from "./Types";
import Heading from "../generals/heading";
import Paragraph from "../generals/paragraph";
import { debounce } from "lodash";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import useWindowDimensions from "../../utils/useWindowSize";
import { useSwipeable } from "react-swipeable";

const Section2b = ({ variants, initial, animate, exit }: SectionProps) => {
  const { width } = useWindowDimensions();
  const data = sectionsData.section2.content2;
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Left")
        setTimeout(() => dispatch({ type: "SEC-2c" }), 300);
      else {
        dispatch({ type: "SEC-2a" });
      }
    },
  });
  const wheelHandler = (e) => {
    e.preventDefault();
    let delta = Math.sign(e.deltaY);
    const bottom = delta > 0;
    if (bottom) {
      setTimeout(() => dispatch({ type: "SEC-2c" }), 300);
    } else {
      dispatch({ type: "SEC-2a" });
    }
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", debounce(wheelHandler, 300));

    return () => {
      element.removeEventListener("wheel", debounce(wheelHandler, 300));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0" {...handlers}>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={state.sec2itm1 ? "hidden" : "show"}
        variants={anim_x}
        transition={{
          ...springTransContainer,
          delay: state.sec2itm1 ? 2 : 0.3,
        }}
        className="absolute inset-0 pt-[5rem] flex flex-col justify-center items-center transition-all px-8 "
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

        <motion.div
          initial={initial}
          animate={animate}
          variants={{ ...variants }}
          transition={spring(0.7)}
          className="absolute bottom-2 right-4 md:bottom-8 md:right-16 z-50"
        >
          <RotateTextCompSvg
            black={state.navBlack}
            size={width < 800 ? 8 : 10}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section2b;
