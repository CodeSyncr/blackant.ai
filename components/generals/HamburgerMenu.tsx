import React from "react";
import { cssClasses } from "../../utils/helpers";

interface HamburgerMenuProps {
  size: number;
  className?: string;
  onClick?: () => void;
}

const HamburgerMenu = ({
  onClick,
  size = 16,
  className = "",
}: HamburgerMenuProps) => {
  return (
    <div className={cssClasses(className, "cursor-pointer")} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${size}`}
        height={`${size}`}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  );
};

export default HamburgerMenu;
