import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Container from "../../components/generals/Container";
import VerticleCardsComp from "../../components/generals/VerticleCardsComp";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";

const Sec1itm3 = () => {
  const { state } = useSection();
  return (
    <AnimatePresence initial={false}>
      <Container
        key={"sec1itm3"}
        navblack={state.navBlack}
        className="bg-baCream px-8 flex-col text-baBlack font-fracRegular w-screen text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] transition-all"
      >
        <motion.div className="s2_item3 absolute bottom-0 w-full min-h-full flex flex-col justify-center items-center overflow-hidden z-50">
          <VerticleCardsComp data={sectionsData.section2.content3} />
        </motion.div>
        <div className="absolute bg-baScrnBlack w-full opacity-30 h-full top-0 z-0"></div>
      </Container>
    </AnimatePresence>
  );
};

export default Sec1itm3;
