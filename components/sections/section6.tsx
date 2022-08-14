import React, { useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Heading from "../generals/Heading";
import Paragraph from "../generals/Paragraph";
import RotateTextComp from "../generals/RotateTextComp";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import { SectionProps } from "./Types";

const Section6 = () => {
  return (
    <Container className="bg-baCream text-baBlack font-fracRegular w-screen">
      <div className="relative w-full h-screen px-8 md:pl-[15%] font-fracRegular text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] flex justify-center flex-col">
        <Heading data={sectionsData.section6.txt1} className="md:-mt-8" />
        <Heading
          data={sectionsData.section6.txt2}
          className="text-baOrange lg:pl-[15%] md:-mt-8 mb-[4rem]"
        />
        <div className="md:pl-[20%] w-[90%] md:w-[60%]">
          <Paragraph
            data={sectionsData.section6.paratxt1}
            className="text-[1.3rem] mb-[2rem] font-manrSemiBold"
            linkText={sectionsData.section6.linkText}
          />
          <div className="font-manrRegular text-[1rem]">
            <Paragraph data={sectionsData.section6.paratxt2} className="mb-4" />

            <Paragraph data={sectionsData.section6.paratxt3} />
          </div>
        </div>
      </div>
      <div className=" hidden md:block md:absolute bottom-32 right-32">
        <RotateTextCompSvg black />
      </div>
    </Container>
  );
};

export default Section6;
