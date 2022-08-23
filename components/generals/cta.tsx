/* eslint-disable @next/next/no-img-element */
import React from "react";

interface QuoteCtaProps {
  text: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Cta = ({ text, icon, className, style, onClick }: QuoteCtaProps) => {
  return (
    <button className={className} onClick={onClick!}>
      {text}
      {icon && (
        <span className="ml-4 ">
          <img src={icon} alt="aero" />
        </span>
      )}
    </button>
  );
};

export default Cta;
