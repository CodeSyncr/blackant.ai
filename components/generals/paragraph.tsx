import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cssClasses } from "../../utils/helpers";
import { spring, variantTypes } from "../../utils/animation_variants";
interface ParagraphProps {
  data?: string;
  className?: string;
  style?: React.CSSProperties;
  linkText?: string;
  animatable?: boolean;
  startAni?: boolean;
  delay?: number;
  variants?: variantTypes;
  initial?: string;
  exit?: string;
  animate?: string;
  exitPos?: string;
}

const Paragraph = ({
  data = "",
  className = "",
  style,
  linkText,
  delay,
  animatable,
  initial = "show",
  animate = "hidden",
  startAni,
  exit,
  variants,
}: ParagraphProps) => {
  return (
    <motion.div
      className={cssClasses(className, "w-full")}
      style={style}
      initial={initial}
      animate={animate}
      exit={exit}
      variants={{ ...variants }}
      transition={spring(delay)}
    >
      {data}

      {linkText && (
        <Link href="/">
          <a className="text-baOrange underline">{linkText}</a>
        </Link>
      )}
    </motion.div>
  );
};

export default Paragraph;
