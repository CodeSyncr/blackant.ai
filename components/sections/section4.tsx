import React, { useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Section2Content3 from "../generals/Section2Content3";
import { SectionProps } from "./Types";

const Section4 = () => {
  return (
    <Container className="bg-baCream text-baBlack font-fracRegular w-screen py-[2rem]">
      <div className="relative w-full top-0 flex flex-col z-10">
        {sectionsData.section2.content3.map((cardItem, i) => (
          <Section2Content3
            key={i}
            align={i % 2 === 0 ? "flex-end" : "flex-start"}
            content={cardItem}
          />
        ))}
      </div>
      <div className="absolute bg-baBlack w-full opacity-50 h-full top-0 z-0"></div>
    </Container>
  );
};

export default Section4;
