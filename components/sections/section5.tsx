import Link from "next/link";
import React from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Cta from "../generals/Cta";
import Heading from "../generals/Heading";
import Input from "../generals/Input";
import { Cell, Grid } from "../generals/LayoutComp";
import Paragraph from "../generals/Paragraph";
import { SectionProps } from "./Types";

const Section5 = () => {
  return (
    <Container className="bg-baBlack text-baWhite text-center font-fracRegular text-[1rem]">
      <Grid className="flex gap-12 lg:gap-24 p-8 lg:px-16 md:h-[80vh] flex-col md:flex-row h-full">
        <Cell className="flex flex-col flex-1">
          <div className="font-fracRegular text-[2.5rem] sm:text-[4rem] md:text-[4rem] lg:text-[5.3rem] flex flex-col justify-center items-center md:items-end">
            <Heading
              data={sectionsData.section5.txt1}
              className="md:-mt-8 md:self-start"
            />
            <Heading
              data={sectionsData.section5.txt2}
              className="text-baOrange md:-mt-8"
            />
            <Heading
              data={sectionsData.section5.txt3}
              className="md:-mt-8 mb-8"
            />
          </div>

          <div className="flex flex-col justify-center items-center text-left w-[90%] sm:w-[60%] md:self-end self-center">
            <Paragraph
              data={sectionsData.section5.paratxt1}
              className="mb-[3rem]"
            />
            <div className="flex justify-between items-center w-full flex-wrap gap-1">
              {sectionsData.section5.socialIcons.map((icon, i) => {
                return (
                  <Link href="#" key={i}>
                    <a>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/icons/${icon}.svg`} alt={icon} key={i} />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </Cell>
        <Cell className="flex-1 flex flex-col self-end mx-auto">
          <div className="w-full lg:w-[80%] flex-col flex justify-center items-center ">
            <Input
              type="text"
              className="bg-transparent outline-none border-b border-baWhite/50 focus:border-baWhite font-manrRegular mb-[3rem] w-full"
              placeholder="Describe your idea"
            />
            <Input
              type="text"
              className="bg-transparent outline-none border-b border-baWhite/50 focus:border-baWhite font-manrRegular mb-[3rem] w-full"
              placeholder="Your email"
            />
            <Cta
              text="Send your idea!"
              className="border-none outline-none bg-baWhite text-baBlack font-bold p-4 px-10 flex justify-center items-center text-[1rem] font-manrBold mb-[4rem] w-full"
            />
          </div>
          <div className="flex justify-center items-start flex-col">
            <Paragraph
              data={sectionsData.section5.paratxt2}
              className="font-manrRegular text-[0.9rem] text-baWhite/70 mb-[1rem] text-left"
            />
            <Heading
              data={sectionsData.section5.email}
              className="font-fracRegular text-[1.5rem]"
            />
          </div>
        </Cell>
      </Grid>
    </Container>
  );
};

export default Section5;
