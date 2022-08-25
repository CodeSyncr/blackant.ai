import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface LogoProps {
  black?: boolean;
}
const Logo = ({ black }: LogoProps) => {
  const router = useRouter();
  return (
    <div
      className="w-[10rem] cursor-pointer"
      onClick={() => window.location.reload()}
    >
      {
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={`/${black ? "LogoBlack" : "Logo"}.svg`} alt="blackant_logo" />
      }
    </div>
  );
};

export default Logo;
