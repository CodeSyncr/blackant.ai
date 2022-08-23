import React from "react";
import { motion } from "framer-motion";
import { cssClasses } from "../../utils/helpers";
import { spring, variantTypes } from "../../utils/animation_variants";

interface HeadingProps {
  data?: string;
  className?: string;
  style?: React.CSSProperties;
  animatable?: boolean;
  startAni?: boolean;
  delay?: number;
  initial?: string;
  animate?: string;
  variants?: variantTypes;
}

const Heading = ({
  data = "",
  className = "",
  style,
  animatable,
  startAni,
  delay,
  initial,
  animate,
  variants,
}: HeadingProps) => {
  return (
    <motion.div
      className={className + " " + "w-full"}
      style={style}
      initial={initial}
      animate={animate}
      variants={{ ...variants }}
      transition={spring(delay)}
    >
      {data}
    </motion.div>
  );
};

export default Heading;
