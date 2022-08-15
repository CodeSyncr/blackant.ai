import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { useScroll } from "framer-motion";
import { anim_y } from "../../utils/animation_variants";
import { delayFunc } from "../../utils/helpers";
import { VerticleCardsCompProps } from "../sections/Types";

const VerticleCardsComp = ({
  data,
  items,
  setItems,
  sections,
  setSections,
  setExit,
}: VerticleCardsCompProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({ container: ref });
  const [scroll, setScroll] = useState(false);
  const scrollInitialVal = 25;
  const [cardDecrement, setCardDecrement] = useState(0);

  // useEffect(() => {
  //   return scrollYProgress.onChange((latest) => {
  //     if (latest > 0.99) {
  //       setItems((prev) => ({ ...prev, item3: false }));
  //       delayFunc(setExit, true);
  //       setTimeout(() => {
  //         setSections((prev) => ({
  //           ...prev,
  //           sec2: false,
  //           sec3: true,
  //           sec4: true,
  //         }));
  //       }, 1000);
  //     }
  //   });
  // }, [items, sections]);
  console.log(cardDecrement);

  const handleScrollevent = (e: React.Mout) => {
    const bottom = e.deltaY > 0;
    if (bottom) {
      setTimeout(() => {
        setCardDecrement((prev) => prev - scrollInitialVal);
      }, 600);
    } else {
      setSections?.((prev) => ({
        ...prev,
        sec2: true,
        sec3: false,
        sec4: false,
      }));
    }
  };

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", handleScrollevent);
  }, [sections, cardDecrement]);

  return (
    <motion.div ref={ref} className="w-full flex flex-col h-screen">
      <motion.div initial={{ y: `0%` }} animate={{ y: "25%" }}>
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
