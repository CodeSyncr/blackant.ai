import React from "react";
import { cssClasses } from "../../utils/helpers";

interface CloseIconCompProps {
  size: number;
  className?: string;
  onClick?: () => void;
}

const CloseIconComp = ({
  onClick,
  size = 16,
  className = "",
}: CloseIconCompProps) => {
  return (
    <div className={cssClasses(className, "cursor-pointer")} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${size}`}
        height={`${size}`}
        fill="currentColor"
        viewBox={`0 0 16 16`}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </div>
  );
};

export default CloseIconComp;
