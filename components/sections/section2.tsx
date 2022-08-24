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

const Section2 = () => {
  const { state } = useSection();

  return (
    <Container
      navblack={state.navBlack}
      className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] transition-all"
    >
      {state.sec2a && (
        <>
          <motion.div
            key={"sec2item1"}
            initial={"show"}
            animate={state.sec2item1 ? "show" : "exit"}
            variants={anim_x}
            transition={{
              ...springTrans,
              delay: state.sec2item1 ? 0.1 : 0.9,
            }}
            className="absolute inset-0 pt-[5rem] flex flex-col justify-center items-center "
          >
            <Section2Content1
              data={sectionsData.section2.content1}
              initial={"show"}
              animate={state.sec2item1 ? "show" : "exit"}
              variants={anim_x}
            />
          </motion.div>

          <motion.div
            key={"sec2item1"}
            initial={"hidden"}
            animate={state.sec2item1 ? "hidden" : "show"}
            variants={anim_x}
            transition={{
              ...springTrans,
              delay: state.sec2item1 ? 0.4 : 0.1,
            }}
            className="s2_item4 absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
          >
            <Section2Content2
              data={sectionsData.section2.content2}
              initial={"hidden"}
              animate={state.sec2item1 ? "hidden" : "show"}
              variants={anim_x}
            />
          </motion.div>
        </>
      )}

      {state.sec2b && (
        <motion.div
          key={"sec2item2"}
          initial={"show"}
          animate={state.sec2item2 ? "show" : "exit"}
          variants={anim_x}
          transition={{
            ...springTrans,
            delay: state.sec2item2 ? 0.1 : 0.4,
          }}
          className="s2_item4 absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
        >
          <Section2Content2
            data={sectionsData.section2.content2}
            initial={"show"}
            animate={state.sec2item2 ? "show" : "exit"}
            variants={anim_x}
          />
        </motion.div>
      )}

      {state.sec2item3 && (
        <>
          <motion.div className="s2_item3 absolute bottom-0 w-full min-h-full flex flex-col justify-center items-center overflow-hidden z-50">
            <VerticleCardsComp data={sectionsData.section2.content3} />
          </motion.div>
          <div className="absolute bg-baScrnBlack w-full opacity-30 h-full top-0 z-0"></div>
        </>
      )}
    </Container>
  );
};

export default Section2;
