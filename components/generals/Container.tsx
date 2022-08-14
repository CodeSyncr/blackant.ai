/* eslint-disable react/display-name */
import React, { FC, forwardRef, useEffect, useRef } from "react";
import useIntersectionObserver from "../../utils/interSectionHook";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, style, onClick }, ref) => {
    return (
      <div
        onClick={onClick}
        className={className}
        ref={ref}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          paddingTop: "5rem",
          position: "relative",
        }}
      >
        {children}
      </div>
    );
  }
);

export default Container;
