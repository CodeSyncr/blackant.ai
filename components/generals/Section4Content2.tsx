/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../generals/ProjectCard";
import Heading from "./heading";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";
import { useSwipeable } from "react-swipeable";
import { debounce } from "lodash";
import { springTrans_carousel } from "../../utils/animation_variants";

const Section4Content2 = () => {
  const data = sectionsData.section4.content2;
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const refs4 = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(1);
  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollLeft = () => setValue((prev) => (prev < -50 ? -61 : prev - 20));
  const scrollRight = () => setValue((prev) => (prev > -20 ? 0 : prev + 20));

  const wheelEventHandler = (e: any) => {
    e.preventDefault();
    let delta = e.deltaY;
    let timeNow = performance.now();
    if (
      delta > 0 &&
      (scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)
    ) {
      setTimeout(() => scrollLeft(), 500);
      scrollingDirection = 1;
    } else if (
      delta < 0 &&
      (scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)
    ) {
      setTimeout(() => scrollRight(), 500);
      scrollingDirection = 2;
    }
    lastScroll = timeNow;
    e.stopPropagation();
  };
  const wheelEventHandlerS4 = (e: any) => {
    e.preventDefault();
    let delta = Math.sign(e.deltaY);
    const bottom = delta > 0;
    if (!bottom) {
      dispatch({ type: "SEC-4" });
    }
    e.stopPropagation();
  };

  const handlersS4 = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Left")
        setTimeout(() => dispatch({ type: "recent_project" }), 200);
      else {
        setTimeout(() => dispatch({ type: "SEC-4" }), 200);
      }
    },
  });

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Left")
        setTimeout(() => scrollLeft(), 200);
      else {
        setTimeout(() => scrollRight(), 200);
      }
      if (value <= -61) {
        setTimeout(() => {
          dispatch({ type: "SEC-5" });
        }, 800);
      }
    },
  });

  useEffect(() => {
    const element = ref.current;
    const elementS4 = refs4.current;
    element.addEventListener("wheel", wheelEventHandler);
    if (value <= -61) {
      element.addEventListener("wheel", () => {
        setTimeout(() => {
          dispatch({ type: "SEC-5" });
        }, 800);
      });
    }
    elementS4.addEventListener("wheel", wheelEventHandlerS4);
    return () => {
      element.removeEventListener("wheel", wheelEventHandler);
      elementS4.addEventListener("wheel", wheelEventHandlerS4);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div {...handlersS4} className="w-full h-full">
      <div
        ref={refs4}
        className="font-fracRegular w-full h-full px-8 md:pl-[5rem]"
      >
        <Heading data={data.txt1} className="text-[2rem] md:text-[3rem] " />
        <div className="mb-[2rem] flex justify-start items-center ">
          <p className="text-baOrange mr-4 font-bold">{data.txt2}</p>
          <img src={"/icons/long_aero.svg"} alt="aero" />
        </div>

        <div
          ref={ref}
          className="relative flex w-full h-[32rem] overflow-hidden cursor-move "
        >
          <div {...handlers} className="flex w-full h-[32rem]">
            <motion.div
              initial={{ x: `0%` }}
              animate={{ x: `${value}%` }}
              transition={springTrans_carousel}
              className="absolute h-full flex "
            >
              {data.cards.map((card, i) => (
                <div key={i} className="inline-block mx-2 md:mx-8 ">
                  <ProjectCard data={card} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4Content2;
