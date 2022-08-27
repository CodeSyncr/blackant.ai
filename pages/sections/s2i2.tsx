import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Container from "../../components/generals/Container";
import Heading from "../../components/generals/Heading";
import Section2Content2 from "../../components/generals/Section2Content2";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";
import { anim_x, springTrans } from "../../utils/animation_variants";

const Sec1itm2 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { state, dispatch } = useSection();
  const data = sectionsData.section2.content2;
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("wheel", (e) => {
      const bottom = e.deltaY > 0;
      if (bottom) {
        dispatch({ type: "SEC-2item3" });
      } else {
        dispatch({ type: "SEC-2a" }); // experimenting
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence initial={false}>
      <Container
        key={"sec1itm2"}
        ref={ref}
        navblack={state.navBlack}
        className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem]  transition-all"
      >
        <motion.div
          initial={"hidden"}
          animate={!state.sec2item1 ? "show" : "hidden"}
          variants={anim_x}
          transition={{
            ...springTrans,
            delay: state.sec2item1 ? 0.4 : 0.1,
          }}
          className="s2_item2 absolute bottom-0 pt-[5rem] w-full h-full flex flex-col justify-center items-center"
        >
          <Heading
            data={data?.txt1}
            className="md:-mt-8 lg:pl-[15%]"
            delay={0.2}
            initial={"hidden"}
            animate={!state.sec2item1 ? "show" : "hidden"}
            variants={anim_x}
            animatable
          />

          <Heading
            data={data?.txt2}
            className="text-baOrange lg:pl-[30%] md:-mt-8 mb-[2rem]"
            delay={0.3}
            initial={"hidden"}
            animate={!state.sec2item1 ? "show" : "hidden"}
            variants={anim_x}
            animatable
          />
          <Paragraph
            data={data?.placeHolderTxt}
            className="font-manrSemiBold text-[1.3rem] break-normal mb-[2rem] md:pl-[10%] lg:pl-[30%] md:pr-[20vw]"
            delay={0.4}
            initial={"hidden"}
            animate={!state.sec2item1 ? "show" : "hidden"}
            variants={anim_x}
            animatable
          />
        </motion.div>
      </Container>
    </AnimatePresence>
  );
};

export default Sec1itm2;
