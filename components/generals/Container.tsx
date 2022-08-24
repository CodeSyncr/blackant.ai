/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import React, { FC, forwardRef, useEffect, useRef } from "react";
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
          className={
            props.navblack
              ? "absolute h-[200vh] w-[40%]  border-l-2 border-r-2 border-dashed border-baScrnBlack/10"
              : "absolute h-[200vh] w-[40%]  border-l-2 border-r-2 border-dashed border-baWhite/10"
          }
        >
          <motion.div
            className={
              props.navblack
                ? "invisible md:visible  absolute h-[200vh] w-[50%]  border-r-2 border-dashed border-baScrnBlack/10"
                : "invisible md:visible  absolute h-[200vh] w-[50%]  border-r-2 border-dashed border-baWhite/10"
            }
          ></motion.div>
        </motion.div>

        {props.children}
      </div>
    );
  }
);

export default Container;
