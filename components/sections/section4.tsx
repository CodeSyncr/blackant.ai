import React, { useState } from "react";
import { sectionsData } from "../../modules/sections";
import Section4Content1 from "../generals/Section4Content1";
import Container from "../generals/Container";
import Heading from "../generals/Heading";
import Paragraph from "../generals/Paragraph";
import RotateTextComp from "../generals/RotateTextComp";
import RotateTextCompSvg from "../generals/RotateTextCompSvg";
import { SectionProps } from "./Types";
import { motion } from "framer-motion";
import { anim_x, anim_y } from "../../utils/animation_variants";
import Section4Content2 from "../generals/Section4Content2";

const Section4 = ({ setSections, sections }: SectionProps) => {
  const [items, setItems] = useState({
    item1: true,
    item2: false,
  });

  return (
    <Container className="bg-baCream text-baBlack font-fracRegular w-screen">
      <motion.div
        initial={"show"}
        animate={items.item1 ? "show" : "exit"}
        variants={anim_y}
        className="absolute"
      >
        <Section4Content1
          data={sectionsData.section4.content1}
          setItems={setItems}
          items={items}
          setSections={setSections!}
          sections={sections!}
        />
      </motion.div>

      <motion.div
        initial={"hidden"}
        animate={items.item2 ? "show" : "hidden"}
        variants={anim_y}
        className="absolute"
      >
        <Section4Content2
          data={sectionsData.section4.content2}
          setItems={setItems}
          items={items}
          setSections={setSections!}
          sections={sections!}
        />
      </motion.div>
    </Container>
  );
};

export default Section4;
