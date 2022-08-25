import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Section5 from "../../components/sections/section5";
import { useSection } from "../../context";
import { anim_y, screenSpringTransition } from "../../utils/animation_variants";

const Sec1 = () => {
  const { state } = useSection();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={"sec5"}
        initial={"show"}
        animate={"show"}
        exit={"hidden"}
        variants={anim_y}
        transition={screenSpringTransition}
        className="absolute inset-0 overflow-hidden h-screen"
      >
        <Section5 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Sec1;
