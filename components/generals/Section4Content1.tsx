import { debounce } from "lodash";
import React, { useEffect, useRef } from "react";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";
import useWindowDimensions from "../../utils/useWindowSize";
import Heading from "./heading";
import Paragraph from "./paragraph";
import RotateTextCompSvg from "./RotateTextCompSvg";
import { useSwipeable } from "react-swipeable";
import { SectionProps } from "../sections/Types";

const Section4Content1 = ({ variants, initial, animate }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();
  const { width } = useWindowDimensions();
  const data = sectionsData.section4.content1;

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Left")
        setTimeout(() => dispatch({ type: "recent_project" }), 100);
      else {
        setTimeout(() => dispatch({ type: "features" }), 100);
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
          setTimeout(() => dispatch({ type: "recent_project" }), 100);
        } else {
          setTimeout(() => dispatch({ type: "features" }), 100);
        }
      }, 300)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative w-full h-full" {...handlers}>
      <div
        ref={ref}
        className="relative w-full h-full  px-8 md:pl-[15%] font-fracRegular text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] flex justify-center flex-col pt-[5rem]"
      >
        <Heading
          data={data.txt1}
          className="md:-mt-8"
          delay={0.1}
          animate={animate}
          initial={initial}
          variants={variants}
        />
        <Heading
          data={data.txt2}
          className="text-baOrange lg:pl-[15%] md:-mt-8 mb-[2rem] md:mb-[4rem]"
          animate={animate}
          initial={initial}
          variants={variants}
          delay={0.2}
        />
        <div className="md:pl-[20%] w-[90%] md:w-[60%]">
          <Paragraph
            data={data.paratxt1}
            className="text-[1.3rem] mb-[2rem] font-manrSemiBold"
            linkText={data.linkText}
            animate={animate}
            initial={initial}
            variants={variants}
            delay={0.3}
          />
          <div className="font-manrRegular text-[1rem]">
            <Paragraph
              data={data.paratxt2}
              className="mb-4"
              delay={0.4}
              animate={animate}
              initial={initial}
              variants={variants}
            />

            <Paragraph
              data={data.paratxt3}
              animate={animate}
              delay={0.5}
              initial={initial}
              variants={variants}
            />
          </div>
        </div>
        <div className="absolute bottom-4 right-8 md:bottom-16 md:right-32 z-50">
          <RotateTextCompSvg
            black={state.navBlack}
            size={width < 800 ? 8 : 10}
          />
        </div>
      </div>
    </div>
  );
};

export default Section4Content1;
