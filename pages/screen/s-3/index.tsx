import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Container from "../../../components/generals/Container";
import Section2Content1 from "../../../components/generals/Section2Content1";
import Section2Content2 from "../../../components/generals/Section2Content2";
import VerticleCardsComp from "../../../components/generals/VerticleCardsComp";
import Section2 from "../../../components/sections/section2";
import Section3 from "../../../components/sections/section3";
import { sectionsData } from "../../../modules/sections";
import {
  anim_x,
  anim_y,
  screenSpringTransition,
  springTrans,
} from "../../../utils/animation_variants";

const Screen3 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const imgScrollRef = useRef<HTMLDivElement>(null!);
  const [exit, setExit] = useState(false);
  const [items, setItems] = useState({
    item1: true,
    item2: false,
    item3: false,
    item4: false,
  });

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="section3"
        ref={ref}
        initial={"show"}
        exit={"exit"}
        transition={screenSpringTransition}
        variants={anim_y}
        className="absolute inset-0 overflow-hidden h-screen"
      >
        <Section3 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Screen3;
