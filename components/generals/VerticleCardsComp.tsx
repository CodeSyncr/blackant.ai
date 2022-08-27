/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { VerticleCardsCompProps } from "../sections/Types";
import { useSection } from "../../context";

const VerticleCardsComp = ({ data }: VerticleCardsCompProps) => {
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(0);

  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollUp = () => setValue((prev) => (prev < -50 ? -65 : prev - 25));
  const scrollDown = () => setValue((prev) => (prev > 10 ? 10 : prev + 25));

  const wheelEventHandler = (e: any) => {
    e.preventDefault();
    let delta = e.deltaY;
    let timeNow = performance.now();
    if (
      delta > 0 &&
      (scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)
    ) {
      setTimeout(() => scrollUp(), 1000);
      scrollingDirection = 1;
    } else if (
      delta < 0 &&
      (scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)
    ) {
      setTimeout(() => scrollDown(), 1000);
      scrollingDirection = 2;
    }
    lastScroll = timeNow;
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", wheelEventHandler);
    return () => {
      element.removeEventListener("wheel", wheelEventHandler);
    };
  }, []);
  console.log(value);
  useEffect(() => {
    if (value > 20) {
      setTimeout(() => {
        dispatch({ type: "analyse_model_exit" });
      }, 1000);
    }
    if (value === -75) {
      setTimeout(() => {
        dispatch({ type: "analyse_model_exit" });
      }, 1000);
      setTimeout(() => {
        dispatch({ type: "curious_abt_exit" });
      }, 1500);
      setTimeout(() => {
        dispatch({ type: "SEC-2-exit" });
      }, 2000);
      setTimeout(() => {
        dispatch({ type: "SEC-3" });
      }, 2100);
    }
  }, [value]);

  return (
    <motion.div ref={ref} className="w-full flex flex-col h-screen">
      <motion.div
        initial={{ y: `25%` }}
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
