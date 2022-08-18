/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import React, { FC, forwardRef, useEffect, useRef } from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  navBlack?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ ...props }, ref) => {
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
          minHeight: "100vh",
          width: "100%",
          paddingTop: "5rem",
          position: "relative",
        }}
      >
        <motion.div
          className={
            props.navBlack
              ? "absolute h-[200vh] w-[40%]  border-l-2 border-r-2 border-dashed border-baScrnBlack/10"
              : "absolute h-[200vh] w-[40%]  border-l-2 border-r-2 border-dashed border-baWhite/10"
          }
        >
          <motion.div
            className={
              props.navBlack
                ? "absolute h-[200vh] w-[50%]  border-r-2 border-dashed border-baScrnBlack/10"
                : "absolute h-[200vh] w-[50%]  border-r-2 border-dashed border-baWhite/10"
            }
          ></motion.div>
        </motion.div>

        {props.children}
      </div>
    );
  }
);

export default Container;
