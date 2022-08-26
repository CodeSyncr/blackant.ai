/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { VerticleCardsCompProps } from "../sections/Types";
import { useSection } from "../../context";

const VerticleCardsComp = ({ data }: VerticleCardsCompProps) => {
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(10);

  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollUp = () => setValue((prev) => (prev < -50 ? -65 : prev - 20));
  const scrollDown = () => setValue((prev) => (prev > 10 ? 10 : prev + 20));

  const wheelEventHandler = (e: any) => {
    e.preventDefault();
    let delta = e.deltaY;
    let timeNow = performance.now();
    if (
      delta > 0 &&
      (scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)
    ) {
      setTimeout(() => scrollUp(), 500);
      scrollingDirection = 1;
    } else if (
      delta < 0 &&
      (scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)
    ) {
      setTimeout(() => scrollDown(), 500);
      scrollingDirection = 2;
    }
    lastScroll = timeNow;
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", wheelEventHandler);
    if (value === 30) {
      setTimeout(() => {
        dispatch({ type: "analyse_model_exit" });
      }, 500);
    }
    if (value === -70) {
      setTimeout(() => {
        dispatch({ type: "analyse_model_exit" });
      }, 500);
      setTimeout(() => {
        dispatch({ type: "curious_abt_exit" });
      }, 1000);
      setTimeout(() => {
        dispatch({ type: "SEC-2-exit" });
      }, 1500);
      setTimeout(() => {
        dispatch({ type: "SEC-3" });
      }, 1600);
    }
    return () => {
      element.removeEventListener("wheel", wheelEventHandler);
    };
  }, [value]);

  return (
    <motion.div ref={ref} className="w-full flex flex-col h-screen">
      <motion.div
        initial={{ y: `30%` }}
        animate={{ y: `${value}%` }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.5,
        }}
      >
        {data.map((cardItem, i) => (
          <Section2Content3
            key={i}
            align={i % 2 === 0 ? "flex-end" : "flex-start"}
            content={cardItem}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default VerticleCardsComp;
