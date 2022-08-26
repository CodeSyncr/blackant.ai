import React from "react";
import { cssClasses } from "../../utils/helpers";

interface LinkCompProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const LinkComp = ({
  children,
  className = "",
  style,
  onClick,
}: LinkCompProps) => {
  return (
    <a style={{ cursor: "pointer" }} onClick={onClick}>
      <div
        className={cssClasses(
          "mx-[1.5rem] hover:text-baOrange transition-all",
          className
        )}
        style={style}
      >
        {children}
      </div>
    </a>
  );
};

export default LinkComp;
