import React, { useEffect, useRef, useState } from "react";
import { sectionsData } from "../../modules/sections";
import Container from "../generals/Container";
import Heading from "../generals/Heading";
import Paragraph from "../generals/Paragraph";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import Section2Content1 from "../generals/Section2Content1";
import Section2Content2 from "../generals/Section2Content2";
import { motion, useScroll, useTransform } from "framer-motion";
import { TEXT_ANIMATION } from "../../utils/enums";
import {
  anim_x,
  anim_x_container,
  containerSpringTransition,
  hidden_bottom,
  hidden_left,
  hidden_right,
  spring,
  springTrans,
  textContainerSpringTransition,
  visible_bottom,
  visible_left,
  visible_right,
} from "../../utils/animation_variants";
import Section2Content3 from "../generals/Section2Content3";
import { SectionProps } from "./Types";
import VerticleCardsComp from "../generals/VerticleCardsComp";
import { delayFunc } from "../../utils/helpers";

const Section2 = ({ onTopY, setOnTopY }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null!);
  const imgScrollRef = useRef<HTMLDivElement>(null!);
  const [exit, setExit] = useState(false);
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showCardValue, setShowCardValue] = useState(25);

  const { scrollY, scrollYProgress } = useScroll({
    container: imgScrollRef,
  });

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      bottom && delayFunc(setOnTopY, true);
      bottom && onTopY && delayFunc(setExit, true);
    });
  }, [onTopY, exit, scrollY]);

  return (
    <Container
      ref={ref}
      className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] transition-all"
    >
      <motion.div
        initial={"show"}
        animate={exit ? "exit" : "show"}
        variants={anim_x}
        transition={{
          ...springTrans,
          delay: exit ? 0.9 : 0.1,
        }}
        className="absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
        onClick={() => setExit(!exit)}
      >
        <Section2Content1
          data={sectionsData.section2.content1}
          initial={"show"}
          animate={exit ? "exit" : "show"}
          variants={anim_x}
        />
      </motion.div>

      <motion.div
        initial={"hidden"}
        animate={exit ? "show" : "hidden"}
        variants={anim_x}
        transition={{
          ...springTrans,
          delay: exit ? 0.1 : 0.4,
        }}
        className="absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
      >
        <Section2Content2
          data={sectionsData.section2.content2}
          initial={"hidden"}
          animate={exit ? "show" : "hidden"}
          variants={anim_x}
        />
      </motion.div>

      {showCard && (
        <>
          <motion.div className="absolute top-0 w-full min-h-full flex flex-col justify-center items-center overflow-hidden z-50">
            <VerticleCardsComp
              data={sectionsData.section2.content3}
              showCard={showCard}
              setShowCard={setShowCard}
            />
          </motion.div>
          <div className="absolute bg-baBlack w-full opacity-50 h-full top-0 z-0"></div>
        </>
      )}
    </Container>
  );
};

export default Section2;
