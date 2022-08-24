/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import ProjectCard from "../generals/ProjectCard";
import { Section4Content2Props } from "../sections/Types";
import Heading from "./Heading";
import { useSection } from "../../context";

const Section4Content2 = ({ data }: Section4Content2Props) => {
  const { dispatch } = useSection();
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(1);
  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollLeft = () => setValue((prev) => (prev < -50 ? -60 : prev - 20));
  const scrollRight = () => setValue((prev) => (prev > -20 ? 0 : prev + 20));

  const wheelEventHandler = (e: any) => {
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
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", wheelEventHandler);
    if (value <= -60) {
      setTimeout(() => {
        dispatch({ type: "SEC-5" });
      }, 500);
    }
    return () => {
      element.removeEventListener("wheel", wheelEventHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="font-fracRegular w-full h-full px-8 md:pl-[5rem]">
      <Heading data={data.txt1} className="text-[2rem] md:text-[3rem] " />
      <div className="mb-[2rem] flex justify-start items-center ">
        <p className="text-baOrange mr-4 font-bold">{data.txt2}</p>
        <img src={"/icons/long_aero.svg"} alt="aero" />
      </div>
      <div ref={ref} className="relative flex w-full h-full overflow-hidden">
        <motion.div
          initial={{ x: `0%` }}
          animate={{ x: `${value}%` }}
          transition={{
            type: "spring",
            stiffness: 50,
          }}
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
  );
};

export default Section4Content2;
