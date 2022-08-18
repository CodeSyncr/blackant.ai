import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { useScroll } from "framer-motion";
import { anim_y } from "../../utils/animation_variants";
import { delayFunc } from "../../utils/helpers";
import { SectionProps, VerticleCardsCompProps } from "../sections/Types";

const VerticleCardsComp = ({
  data,
  items,
  setItems,
  sections,
  setSections,
  exit,
  setExit,
}: VerticleCardsCompProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [value, setValue] = useState(30);
  const [increment, setIncrement] = useState(false);
  const { scrollYProgress } = useScroll({ container: ref });
  const wheelHandler = (e: any) => {
    e.preventDefault();
    let bottom = e.deltaY > 0;
    if (bottom) {
      setValue((prev) => (prev <= -45 ? -45 : prev - 25));
    } else {
      setValue((prev) => (prev <= 30 ? prev + 25 : 30));
    }
    if (value === -45) {
      delayFunc(setExit, true);
    } else {
      setExit?.(false);
    }
  };

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.99) {
        setItems((prev) => ({ ...prev, item3: false }));
        delayFunc(setExit, true);
        setTimeout(() => {
          setSections?.((prev) => ({
            ...prev,
            sec2exit: true,
            navBlack: false,
            sec3: true,
          }));
        }, 1000);
      }
    });

    // const element = ref.current;
    // element.addEventListener("wheel", wheelHandler);
    // if (exit) {
    //   setTimeout(() => {
    //     setSections?.((prev) => ({
    //       ...prev,
    //       sec2exit: true,
    //       navBlack: false,
    //       sec3: true,
    //     }));
    //   }, 1000);
    // }
    // return () => {
    //   element.removeEventListener("wheel", wheelHandler);
    // };
  }, [items, sections, value]);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col h-screen overflow-y-scroll"
    >
      <motion.div
        initial={{ y: `30%` }}
        animate={{ y: `${value}%` }}
        transition={{
          type: "spring",
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
