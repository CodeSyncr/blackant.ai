import { useScroll } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ctaData } from "../../modules/navlinks";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Cta from "../generals/Cta";
import Heading from "../generals/Heading";
import { SectionProps } from "./Types";

// eslint-disable-next-line react/display-name

const Section1 = ({ sections, setSections }: SectionProps) => {
  return (
    <Container className="s1_item1 bg-baBlack text-baWhite flex-col text-center font-fracRegular text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] overflow-y-scroll">
      <Heading
        data={sectionsData.section1.txt1}
        className="md:-mt-8"
        animatable={false}
      />
      <Heading
        data={sectionsData.section1.txt2}
        className="md:-mt-8 mb-[2rem] text-baOrange"
        animatable={false}
      />
      <Cta
        text={ctaData.section1.text}
        className="border-none outline-none bg-baWhite text-baBlack font-bold p-4 px-10 flex justify-center items-center text-[1rem] font-manrBold"
      />
    </Container>
  );
};

export default Section1;
