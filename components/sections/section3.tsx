import React, { useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Section2Content2 from "../generals/Section2Content2";
import { SectionProps } from "./Types";

const Section3 = () => {
  return (
    <Container className="bg-baCream text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] transition-all">
      <Section2Content2 data={sectionsData.section2.content2} />
    </Container>
  );
};

export default Section3;
