/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { useSection } from "../../context";
interface RotateTextCompSvgProps {
  size?: number;
  black?: boolean;
}

const RotateTextCompSvg = ({ size = 12, black }: RotateTextCompSvgProps) => {
  const { state } = useSection();
  return (
    <div
      style={{
        position: "relative",
        width: `${size}rem`,
        height: `${size}rem`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
        }}
        className="absolute inset-0"
      >
        {black ? (
          <img src="/icons/contact_us_bk1.svg" alt="contact us" />
        ) : (
          <img src="/icons/contact_us_wht1.svg" alt="contact us" />
        )}
      </motion.div>
      {!state.sec5 && (
        <motion.div
          animate={{ y: [0, 5] }}
          transition={{
            type: "spring",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
            stiffness: 80,
          }}
          style={{
            width: `${size / 6}rem`,
          }}
        >
          <img src="/icons/down_aero_sm.svg" alt="aero" />
        </motion.div>
      )}
    </div>
  );
};

export default RotateTextCompSvg;
