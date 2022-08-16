import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Section5 from "../../../components/sections/section5";
import {
  anim_x,
  anim_y,
  screenSpringTransition,
  springTrans,
} from "../../../utils/animation_variants";

const Screen5 = () => {
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
        key="section5"
        ref={ref}
        initial={"show"}
        exit={"exit"}
        transition={screenSpringTransition}
        variants={anim_y}
        className="absolute inset-0 overflow-hidden h-screen"
      >
        <Section5 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Screen5;
