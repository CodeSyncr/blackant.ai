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
  const [out, setOut] = useState(false);
  const [value, setValue] = useState(10);
  const { scrollYProgress } = useScroll({ container: ref });
  let scrollingDirection = 0;
  let lastScroll = 9999;
  let scrollIdleTime = 300;

  const scrollUp = () => setValue((prev) => (prev < -50 ? -50 : prev - 20));
  const scrollDown = () => setValue((prev) => (prev > 10 ? 10 : prev + 20));

  const wheelEventHandler = (e) => {
    let delta = e.deltaY;
    let timeNow = performance.now();
    if (
      delta > 0 &&
      (scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime)
    ) {
      scrollUp();
      scrollingDirection = 1;
    } else if (
      delta < 0 &&
      (scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)
    ) {
      console.log("down");
      scrollDown();
      scrollingDirection = 2;
    }
    lastScroll = timeNow;
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", wheelEventHandler);
    if (value === -70) {
      delayFunc(setExit, true);
      setTimeout(() => {
        setSections?.((prev) => ({
          ...prev,
          sec2: false,
          sec2exit: true,
          navBlack: false,
          sec3: true,
        }));
      }, 1000);
    }
    return () => {
      element.removeEventListener("wheel", wheelEventHandler);
    };

    // return scrollYProgress.onChange((latest) => {
    //   if (latest > 0.99) {
    //     setItems((prev) => ({ ...prev, item3: false }));
    //     // delayFunc(setExit, true);
    //     setExit?.(true);
    //     setTimeout(() => {
    //       setSections?.((prev) => ({
    //         ...prev,
    //         sec2exit: true,
    //         navBlack: false,
    //         sec3: true,
    //       }));
    //     }, 1000);
    //   }
    // });
  }, [value]);
  console.log(value);

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
