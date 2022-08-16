import React, { useEffect, useRef } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Heading from "../generals/Heading";
import { Cell, Grid } from "../generals/LayoutComp";
import ProgramCard from "../generals/ProgramCard";
import RotateTextComp from "../generals/RotateTextComp";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import { SectionProps } from "./Types";

const Section3 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
      } else {
      }
    });
  }, []);
  return (
    <Container className="bg-baBlack text-baWhite text-center font-fracRegular text-[1rem]">
      <div ref={ref}>
        <Grid className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-row-3 grid-flow-row p-6 md:px-16 lg:px-32 content-between items-center [&>*]:mb-8">
          <Cell className="col-span-full lg:col-span-3 flex justify-start items-center text-left lg:text-right">
            <Heading
              data={sectionsData.section3.txt1}
              className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] lg:w-[90%]"
            />
          </Cell>

          <Cell className="col-span-full md:col-span-1 flex justify-center items-center">
            <RotateTextCompSvg />
          </Cell>

          <Cell className="col-span-full md:col-span-1 lg:col-span-3 flex justify-start items-center text-[1.5rem] md:text-[2rem] text-left font-fracLight">
            <Heading
              data={sectionsData.section3.txt2}
              className="px-2 lg:pr-[45%]"
            />
          </Cell>

          <Cell className="col-span-full md:col-span-1 flex justify-between w-[80%] h-[70%] lg:h-[50%] mt-[0.5rem] items-center text-[2rem] text-left border-b-2 border-baWhite/30">
            <Heading data={sectionsData.section3.txt3} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/long_down_aero.svg" alt="" />
          </Cell>

          <Cell className="px-2 col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
            {sectionsData.section3.programCards.map((card, i) => {
              return <ProgramCard data={card} key={i} />;
            })}
          </Cell>
        </Grid>
      </div>
    </Container>
  );
};

export default Section3;
