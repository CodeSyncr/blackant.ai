/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";

import ProjectCard from "../generals/ProjectCard";
import { Section4Content2Props } from "../sections/Types";
import Heading from "./Heading";
import { debounce, throttle } from "lodash";

const Section4Content2 = ({
  data,
  items,
  setItems,
  sections,
  setSections,
}: Section4Content2Props) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(1);
  const [exit, setExit] = useState(false);
  const wheelHandler = (e: any) => {
    e.preventDefault();
    let bottom = e.deltaY > 0;
    console.log(bottom);
    if (bottom) {
      setValue((prev) => (prev < -60 ? -55 : prev - 5));
    } else {
      setValue((prev) => (prev < -60 ? prev + 5 : 0));
    }
    if (value <= -55) {
      setExit(true);
    } else {
      setExit(false);
    }
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", wheelHandler);
    if (exit) {
      setSections?.((prev) => ({
        ...prev,
        sec4: false,
        sec4exit: true,
        sec5: true,
        navBlack: false,
      }));
    }
    return () => {
      element.removeEventListener("wheel", wheelHandler);
    };
  }, [value]);

  return (
    <div className="font-fracRegular w-full h-full  pl-[5rem]">
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
            duration: 0.5,
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
