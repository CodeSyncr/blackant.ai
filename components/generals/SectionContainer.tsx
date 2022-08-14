import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 1 },
};

interface SectionContainerProps {
  full: boolean;
  half?: boolean;
  transLeft?: boolean;
  children: React.ReactNode;
  triggerOnce?: boolean;
}

const SectionContainer = ({
  full = false,
  half = false,
  transLeft = false,
  triggerOnce = false,
  children,
}: SectionContainerProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: triggerOnce,
  });

  return (
    <div
      className="snap-child-center"
      ref={ref}
      style={{
        height: full ? "100vh" : half ? "50vh" : 120,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
