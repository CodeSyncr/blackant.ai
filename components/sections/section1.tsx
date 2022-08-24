/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { useSection } from "../../context";
import { ctaData } from "../../modules/navlinks";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Cta from "../generals/Cta";
import Heading from "../generals/Heading";

// eslint-disable-next-line react/display-name

const Section1 = () => {
  const { state, dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    dispatch({ type: "SEC-1" });
    const element = ref.current;
    element.addEventListener("wheel", (e: any) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        dispatch({ type: "SEC-2a" });
      } else {
        dispatch({ type: "SEC-5" });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      ref={ref}
      navblack={state.navBlack}
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
