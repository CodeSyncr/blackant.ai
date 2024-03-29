import React, { useState } from "react";
import { sectionsData } from "../../modules/sections";
import Section4Content1 from "../generals/Section4Content1";
import Container from "../generals/Container";
import { motion } from "framer-motion";
import { anim_y, screenSpringTransition } from "../../utils/animation_variants";
import Section4Content2 from "../generals/Section4Content2";
import { useSection } from "../../context";

const Section4 = () => {
  const { state } = useSection();
  const [items, setItems] = useState({
    item1: true,
    item2: false,
  });

  return (
    <Container
      navblack={state.navBlack}
      className="bg-baCream text-baBlack font-fracRegular w-screen overflow-hidden"
    >
      <motion.div
        initial={"show"}
        animate={state.sec4itm1 ? "show" : "exit"}
        variants={anim_y}
        transition={screenSpringTransition}
        className="absolute inset-0 overflow-hidden"
      >
        <Section4Content1 />
      </motion.div>

      <motion.div
        initial={"hidden"}
        animate={items.item2 ? "show" : "hidden"}
        variants={anim_y}
        transition={screenSpringTransition}
        className="absolute w-full h-full pt-[5rem] flex flex-col justify-center items-center "
      >
        <Section4Content2 />
      </motion.div>
    </Container>
  );
};

export default Section4;
