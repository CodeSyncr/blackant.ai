import React, { useEffect, useRef, useState } from "react";
import { sectionsData } from "../../modules/sections";
import { motion } from "framer-motion";
import { anim_x, spring, springTrans } from "../../utils/animation_variants";
import { useSection } from "../../context";
import { SectionProps } from "./Types";
import Heading from "../generals/heading";
import Paragraph from "../generals/paragraph";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import useWindowDimensions from "../../utils/useWindowSize";
import { debounce } from "lodash";
import { useSwipeable } from "react-swipeable";

const Section2a = ({ variants, initial, animate }: SectionProps) => {
  const [textAni, setTextAni] = useState(false);
  const data = sectionsData.section2.content1;
  const { width } = useWindowDimensions();
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Left")
        dispatch({ type: "SEC-2b" });
      else {
        dispatch({ type: "SEC-1" });
      }
    },
  });

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
  useEffect(() => {
    let timer;
    if (!state.sec1a && state.sec2a) {
      timer = setTimeout(() => {
        setTextAni(true);
      }, 1000);
    } else {
      setTextAni(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [state.sec1a, state.sec2a]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={textAni ? { opacity: [1, 0.8, 0.6, 1] } : { opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="absolute inset-0"
      {...handlers}
    >
      <motion.div
        ref={ref}
        initial={initial}
        animate={animate}
        variants={{ ...variants }}
        transition={{
          ...springTrans,
          delay: state.sec2itm1 ? 0.1 : 0.9,
        }}
        className="absolute inset-0 pt-[5rem] flex flex-col justify-center items-center transition-all px-8"
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
          <RotateTextCompSvg
            black={state.navBlack}
            size={width < 800 ? 8 : 10}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section2a;
