/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { useSection } from "../../context";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  navblack?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ ...props }, ref) => {
    const { state } = useSection();
    const [lineAni, setLineAni] = useState(false);
    useEffect(() => {
      let timer;
      if (!state.sec1a && state.sec2a) {
        timer = setTimeout(() => {
          setLineAni(true);
        }, 1000);
      } else {
        setLineAni(false);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [state.sec1a, state.sec2a]);
    return (
      <div
        {...props}
        onClick={props.onClick}
        className={props.className}
        ref={ref}
        style={{
          ...props.style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          paddingTop: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ y: 0, x: 0, opacity: 1 }}
          animate={
            lineAni
              ? { y: "50vh", x: [0, 6, 4, 0], opacity: [1, 0.8, 0.3, 1] }
              : { y: 0, x: 1, opacity: 1 }
          }
          transition={{ ease: "easeInOut", duration: 1 }}
          className={
            props.navblack
              ? "absolute h-[200vh] w-[40%] bottom-0 border-l-2 border-r-2 border-dashed border-baScrnBlack/10"
              : "absolute h-[200vh] w-[40%] bottom-0 border-l-2 border-r-2 border-dashed border-baWhite/10"
          }
        >
          <motion.div
            className={
              props.navblack
                ? "invisible md:visible bottom-0 absolute h-[200vh] w-[50%]  border-r-2 border-dashed border-baScrnBlack/10"
                : "invisible md:visible bottom-0 absolute h-[200vh] w-[50%]  border-r-2 border-dashed border-baWhite/10"
            }
          ></motion.div>
        </motion.div>

        {props.children}
      </div>
    );
  }
);

export default Container;
