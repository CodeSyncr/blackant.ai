import React from "react";

interface QuoteCtaProps {
  text: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Cta = ({ text, icon, className, style }: QuoteCtaProps) => {
  return (
    <button className={className}>
      {text}
      {icon && (
        <span className="ml-4 ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="aero" />
        </span>
      )}
    </button>
  );
};

export default Cta;
