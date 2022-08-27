import React, { useEffect, useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Section2Content1 from "../generals/section2Content1";
import Section2Content2 from "../generals/Section2Content2";
import { AnimatePresence, motion } from "framer-motion";
import { anim_x, springTrans } from "../../utils/animation_variants";
import { SectionProps } from "./Types";
import VerticleCardsComp from "../generals/VerticleCardsComp";
import { useSection } from "../../context";
import Section2Content2b from "../generals/Section2Content2b";

const Section2c = () => {
  const { state } = useSection();

  return (
    <Container
      navblack={state.navBlack}
      className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem]  transition-all"
    >
      <motion.div
        initial={"show"}
        animate={state.sec2itm2 ? "show" : "exit"}
        variants={anim_x}
        transition={{
          ...springTrans,
          delay: 0.4,
        }}
        className=" absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
      >
        <Section2Content2b
          data={sectionsData.section2.content2}
          initial={"show"}
          animate={state.sec2itm2 ? "show" : "exit"}
          variants={anim_x}
        />
      </motion.div>

      {/* {state.sec2itm3 && (
        <>
          <motion.div className="s2_item3 absolute bottom-0 w-full min-h-full flex flex-col justify-center items-center overflow-hidden z-50">
            <VerticleCardsComp data={sectionsData.section2.content3} />
          </motion.div>
          <div className="absolute bg-baScrnBlack w-full opacity-30 h-full top-0 z-0"></div>
        </>
      )} */}
    </Container>
  );
};

export default Section2c;
