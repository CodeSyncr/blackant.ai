import React from "react";
import Image from "next/image";

interface LogoProps {
  black?: boolean;
}
const Logo = ({ black }: LogoProps) => {
  return (
    <div className="w-[10rem]">
      {
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={`${black ? "LogoBlack" : "Logo"}.svg`} alt="blackant_logo" />
      }
    </div>
  );
};

export default Logo;
