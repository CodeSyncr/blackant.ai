import React, { useEffect, useRef } from "react";
import { Section4Content1Props } from "../sections/Types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import RotateTextCompSvg from "./RotateTextCompSvg";

const Section4Content1 = ({
  data,
  setItems,
  items,
  sections,
  setSections,
}: Section4Content1Props) => {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        setItems?.((prev) => ({
          ...prev,
          item1: false,
          item2: true,
        }));
      } else {
        setSections?.((prev) => ({
          ...prev,
          sec3: true,
          sec4: false,
          navBlack: false,
        }));
      }
    });
  }, [items, sections]);
  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-screen px-8 md:pl-[15%] font-fracRegular text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] flex justify-center flex-col"
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
      </div>
      <div className=" hidden md:block md:absolute bottom-32 right-32">
        <RotateTextCompSvg black />
      </div>
    </>
  );
};

export default Section4Content1;
