import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Container from "../../components/generals/Container";
import Section4Content1 from "../../components/generals/Section4Content1";
import Section4Content2 from "../../components/generals/Section4Content2";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";
import { anim_y, screenSpringTransition } from "../../utils/animation_variants";

const Sec4itm1 = () => {
  const { state } = useSection();
  return (
    <AnimatePresence initial={false}>
      <Container
        navblack={state.navBlack}
        className="bg-baCream text-baBlack font-fracRegular w-screen overflow-hidden"
      >
        <motion.div
          initial={"show"}
          animate={"show"}
          variants={anim_y}
          transition={screenSpringTransition}
          className="absolute"
        >
          <Section4Content1 data={sectionsData.section4.content1} />
        </motion.div>
      </Container>
    </AnimatePresence>
  );
};

export default Sec4itm1;
