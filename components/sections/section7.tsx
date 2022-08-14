import React from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import ProjectCard from "../generals/ProjectCard";
import { SectionProps } from "./Types";

const Section7 = () => {
  return (
    <Container className="bg-baCream text-baBlack font-fracRegular w-screen overflow-x-scroll pl-[5rem]">
      <div className="flex gap-16 justify-start absolute left-[10px] md:left-[40px] lg:left-[100px] px-[5rem]">
        {sectionsData.section7.map((card, i) => (
          <ProjectCard key={i} data={card} />
        ))}
      </div>
    </Container>
  );
};

export default Section7;
