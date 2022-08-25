import React, { useEffect, useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Section2Content1 from "../generals/section2Content1";
import Section2Content2 from "../generals/Section2Content2";
import { motion } from "framer-motion";
import { anim_x, springTrans } from "../../utils/animation_variants";
import { useSection } from "../../context";

const Section2a = () => {
  const { state } = useSection();

  return (
    <Container
      navblack={state.navBlack}
      className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] transition-all"
    >
      <motion.div
        initial={"show"}
        animate={state.sec2itm1 ? "show" : "exit"}
        variants={anim_x}
        transition={{
          ...springTrans,
          delay: state.sec2itm1 ? 0.1 : 0.8,
        }}
        className="s2_item1 absolute inset-0 pt-[5rem] flex flex-col justify-center items-center "
      >
        <Section2Content1
          data={sectionsData.section2.content1}
          initial={"show"}
          animate={state.sec2itm1 ? "show" : "exit"}
          variants={anim_x}
        />
      </motion.div>

      <motion.div
        initial={"hidden"}
        animate={state.sec2itm1 ? "hidden" : "show"}
        variants={anim_x}
        transition={{
          ...springTrans,
          delay: state.sec2itm1 ? 0.4 : 0.1,
        }}
        className="s2_item2 absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
      >
        <Section2Content2
          data={sectionsData.section2.content2}
          initial={"hidden"}
          animate={state.sec2itm1 ? "hidden" : "show"}
          variants={anim_x}
        />
      </motion.div>
    </Container>
  );
};

export default Section2a;
