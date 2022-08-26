import React, { useEffect, useRef } from "react";
import { useSection } from "../../context";
import useWindowDimensions from "../../utils/useWindowSize";
import { Section4Content1Props } from "../sections/Types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import RotateTextCompSvg from "./RotateTextCompSvg";

const Section4Content1 = ({
  data,
  setItems,
  items,
  sections,
}: Section4Content1Props) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      e.preventDefault();
      let delta = Math.sign(e.deltaY);
      const bottom = delta > 0;
      if (bottom) {
        setTimeout(() => dispatch({ type: "recent_project" }), 500);
      } else {
        dispatch({ type: "features" });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
  return (
    <div
      ref={ref}
      className="relative w-full h-full  px-8 md:pl-[15%] font-fracRegular text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] flex justify-center flex-col pt-[5rem]"
    >
      <Heading data={data.txt1} className="md:-mt-8" />
      <Heading
        data={data.txt2}
        className="text-baOrange lg:pl-[15%] md:-mt-8 mb-[4rem]"
      />
      <div className="md:pl-[20%] w-[90%] md:w-[60%]">
        <Paragraph
          data={data.paratxt1}
          className="text-[1.3rem] mb-[2rem] font-manrSemiBold"
          linkText={data.linkText}
        />
        <div className="font-manrRegular text-[1rem]">
          <Paragraph data={data.paratxt2} className="mb-4" />

          <Paragraph data={data.paratxt3} />
        </div>
      </div>
      <div className="absolute bottom-4 right-8 md:bottom-16 md:right-32 z-50">
        <RotateTextCompSvg black={state.navBlack} size={width < 800 ? 8 : 12} />
      </div>
    </div>
  );
};

export default Section4Content1;
