/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { VerticleCardsCompProps } from "../sections/Types";
import { useSection } from "../../context";
import { useSwipeable } from "react-swipeable";
import { springTrans_modal } from "../../utils/animation_variants";

const VerticleCardsComp = ({ data }: VerticleCardsCompProps) => {
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(0);

  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollUp = () => setValue((prev) => (prev < -50 ? -76 : prev - 25));
  const scrollDown = () => setValue((prev) => (prev > 0 ? 26 : prev + 25));

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
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Left") {
        setTimeout(() => scrollUp(), 100);
      } else {
        setTimeout(() => scrollDown(), 100);
      }
      if (value <= -76) {
        setTimeout(() => {
          dispatch({ type: "analyse_model_exit" });
        }, 500);
        setTimeout(() => {
          dispatch({ type: "curious_abt_exit" });
        }, 700);
        setTimeout(() => {
          dispatch({ type: "SEC-2-exit" });
        }, 1500);
        setTimeout(() => {
          dispatch({ type: "SEC-3" });
        }, 1600);
      }
      if (value >= 26) {
        setTimeout(() => {
          dispatch({ type: "analyse_model_exit" });
        }, 500);
      }
    },
  });

  const exitHandler = () => {
    dispatch({ type: "analyse_model_exit" });
  };
  const exitHandlerAfterValue = () => {
    setTimeout(() => {
      dispatch({ type: "analyse_model_exit" });
    }, 500);
    setTimeout(() => {
      dispatch({ type: "curious_abt_exit" });
    }, 700);
    setTimeout(() => {
      dispatch({ type: "SEC-2-exit" });
    }, 2200);
    setTimeout(() => {
      dispatch({ type: "SEC-3" });
    }, 1600);
  };

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
    let timer1: any;
    let timer2: any;
    const element = ref.current;
    if (value >= 26) {
      timer1 = setTimeout(() => {
        element.addEventListener("wheel", exitHandler);
      }, 500);
    }
    if (value <= -76) {
      timer2 = setTimeout(() => {
        element.addEventListener("wheel", exitHandlerAfterValue);
      }, 500);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      element.removeEventListener("wheel", exitHandler);
      element.removeEventListener("wheel", exitHandlerAfterValue);
    };
  }, [value]);

  return (
    <div className="absolute inset-0 " {...handlers}>
      <motion.div ref={ref} className="w-full flex flex-col h-screen">
        <motion.div
          initial={{ y: `25%` }}
          animate={{ y: `${value}%` }}
          transition={springTrans_modal}
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
