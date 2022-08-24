/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { VerticleCardsCompProps } from "../sections/Types";
import { useSection } from "../../context";

const VerticleCardsComp = ({
  data,
  items,
  setItems,
  sections,
  setSections,
  exit,
  setExit,
}: VerticleCardsCompProps) => {
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(10);
  const [valueExceed, setValueExceed] = useState(false);

  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollUp = () => setValue((prev) => (prev < -50 ? -65 : prev - 20));
  const scrollDown = () => setValue((prev) => (prev > 10 ? 10 : prev + 20));

  const wheelEventHandler = (e: any) => {
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
    }
    if (value === -70) {
      setTimeout(() => {
        setItems((prev) => ({
          ...prev,
          item3: false,
        }));
      }, 1000);
      setTimeout(() => {
        setExit?.(true);
      }, 1200);

      setTimeout(() => {
        dispatch({ type: "SEC-3" });
      }, 1500);
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
