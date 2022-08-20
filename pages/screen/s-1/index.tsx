import React, { useEffect, useRef, useState } from "react";
import Section1 from "../../../components/sections/section1";
import {
  anim_y,
  screenSpringTransition,
} from "../../../utils/animation_variants";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Screen1 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  const [newPage, setNewPage] = useState(false);
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        setNewPage(true);
        router.push("s-2");
      } else {
      }
    });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="section1"
        ref={ref}
        initial={router.asPath === "/screen/s-2" ? "show" : "exit"}
        animate={newPage ? "exit" : "show"}
        exit={"exit"}
        transition={screenSpringTransition}
        variants={anim_y}
      >
        <Section1 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Screen1;
