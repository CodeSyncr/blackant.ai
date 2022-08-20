/* eslint-disable @next/next/no-img-element */
import { motion, useScroll } from "framer-motion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ctaData } from "../../modules/navlinks";
import { sectionsData } from "../../modules/sections";
import { anim_y, screenSpringTransition } from "../../utils/animation_variants";
import Container from "../generals/Container";
import Cta from "../generals/Cta";
import Heading from "../generals/Heading";
import { SectionProps } from "./Types";

// eslint-disable-next-line react/display-name

const Section1 = ({ sections, setSections }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        setSections?.((prev) => ({
          ...prev,
          sec1: false,
          sec2exit: false,
          sec2: true,
          navBlack: true,
        }));
      }
    });
  }, [sections]);

  useEffect(() => {
    setSections?.({
      sec1: true,
      sec2: false,
      sec2exit: false,
      sec3: false,
      sec4: false,
      sec4exit: false,
      sec5: false,
      navBlack: false,
    });
  }, []);

  return (
    <Container
      ref={ref}
      navBlack={sections?.navBlack}
      className="s1_item1 bg-baScrnBlack text-baWhite flex-col text-center font-fracRegular text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] z-10"
    >
      <Heading
        data={sectionsData.section1.txt1}
        className="md:-mt-8 z-10"
        animatable={false}
      />
      <Heading
        data={sectionsData.section1.txt2}
        className="md:-mt-8 mb-[2rem] text-baOrange z-10"
        animatable={false}
      />
      <Cta
        text={ctaData.section1.text}
        className="border-none outline-none bg-baWhite text-baBlack font-bold p-4 px-10 flex justify-center items-center text-[1rem] font-manrBold z-10"
      />
      <div className="absolute inset-0 -z-10 overflow-hidden flex justify-center items-center">
        <img
          src="/images/hero.png"
          alt="hero"
          className="object-cover h-full "
        />
      </div>
    </Container>
  );
};

export default Section1;
