import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Container from "../../../components/generals/Container";
import Section2Content1 from "../../../components/generals/Section2Content1";
import Section2Content2 from "../../../components/generals/Section2Content2";
import VerticleCardsComp from "../../../components/generals/VerticleCardsComp";
import Section2 from "../../../components/sections/section2";
import { sectionsData } from "../../../modules/sections";
import {
  anim_x,
  anim_y,
  screenSpringTransition,
  springTrans,
} from "../../../utils/animation_variants";

const Screen2 = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null!);
  const [exit, setExit] = useState(false);
  const [items, setItems] = useState({
    item1: true,
    item2: false,
    item3: false,
    item4: false,
  });
  console.log(router);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="section2"
        ref={ref}
        initial={"hidden"}
        animate={router.asPath === "/screen/s-2" ? "show" : "hidden"}
        transition={screenSpringTransition}
        variants={anim_y}
        className="absolute inset-0 overflow-hidden h-screen"
      >
        <Section2 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Screen2;
