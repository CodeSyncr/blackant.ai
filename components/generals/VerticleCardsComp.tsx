/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { VerticleCardsCompProps } from "../sections/Types";
import { useSection } from "../../context";
import { useSwipeable } from "react-swipeable";

const VerticleCardsComp = ({ data }: VerticleCardsCompProps) => {
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(0);

  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollUp = () => setValue((prev) => (prev < -50 ? -75 : prev - 25));
  const scrollDown = () => setValue((prev) => (prev > 0 ? 25 : prev + 25));

  const wheelEventHandler = (e: any) => {
    e.preventDefault();
    let delta = Math.sign(e.deltaY);
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

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {
      setTimeout(() => scrollUp(), 100);
      if (value <= -75) {
        setTimeout(() => {
          dispatch({ type: "analyse_model_exit" });
        }, 1000);
        setTimeout(() => {
          dispatch({ type: "curious_abt_exit" });
        }, 1200);
        setTimeout(() => {
          dispatch({ type: "SEC-2-exit" });
        }, 2000);
        setTimeout(() => {
          dispatch({ type: "SEC-3" });
        }, 2100);
      }
    },
    onSwipedDown: (eventData) => {
      setTimeout(() => scrollDown(), 100);
      if (value >= 25) {
        setTimeout(() => {
          dispatch({ type: "analyse_model_exit" });
        }, 500);
      }
    },
  });

  useEffect(() => {
    let timer: any;
    const element = ref.current;
    timer = setTimeout(() => {
      element.addEventListener("wheel", wheelEventHandler);
    }, 500);
    return () => {
      clearTimeout(timer);
      element.removeEventListener("wheel", wheelEventHandler);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (value >= 25) {
      element.addEventListener("wheel", () => {
        setTimeout(() => {
          dispatch({ type: "analyse_model_exit" });
        }, 500);
      });
    }
    if (value <= -75) {
      element.addEventListener("wheel", () => {
        setTimeout(() => {
          dispatch({ type: "analyse_model_exit" });
        }, 1000);
        setTimeout(() => {
          dispatch({ type: "curious_abt_exit" });
        }, 1200);
        setTimeout(() => {
          dispatch({ type: "SEC-2-exit" });
        }, 2000);
        setTimeout(() => {
          dispatch({ type: "SEC-3" });
        }, 2100);
      });
    }
  }, [value]);

  return (
    <div className="absolute inset-0 " {...handlers}>
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
    </div>
  );
};

export default VerticleCardsComp;
