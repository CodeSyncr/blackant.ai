import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Section1 from "../../components/sections/section1";
import Section3 from "../../components/sections/section3";
import { useSection } from "../../context";

const Sec3 = () => {
  const { state } = useSection();
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={"sec3"}
        className={"absolute inset-0 overflow-hidden h-screen"}
      >
        <Section3 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Sec3;
