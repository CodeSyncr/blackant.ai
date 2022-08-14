import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Section2Content3 from "./Section2Content3";
import { useScroll } from "framer-motion";

interface VerticleCardsCompProps {
  data: {
    txt1: string;
    txt2: string;
    txt3: string;
    img: string;
  }[];
  showCard: boolean;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerticleCardsComp = ({
  data,
  setShowCard,
  showCard,
}: VerticleCardsCompProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollY } = useScroll({ container: ref });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      //   console.log(latest);
      if (latest > 1300) {
        setShowCard(false);
      }
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col h-screen  overflow-y-auto"
    >
      {data.map((cardItem, i) => (
        <Section2Content3
          key={i}
          align={i % 2 === 0 ? "flex-end" : "flex-start"}
          content={cardItem}
        />
      ))}
    </motion.div>
  );
};

export default VerticleCardsComp;
