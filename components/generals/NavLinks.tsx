import Link from "next/link";
import React from "react";
import { useSection } from "../../context";
import { navlinks, ctaData } from "../../modules/navlinks";
import { cssClasses } from "../../utils/helpers";
import Cta from "./Cta";
import LinkComp from "./LinkComp";

interface NavLinksProps {
  className: string;
  onClick: (text: string) => void;
}

const NavLinks = ({ className, onClick }: NavLinksProps) => {
  return (
    <>
      <div className={className + " " + "font-manrMedium"}>
        {navlinks.map((link, idx) => {
          return (
            <a
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => onClick(link.label)}
            >
              <div
                className={cssClasses(
                  "mx-[1.5rem] hover:text-baOrange transition-all",
                  className
                )}
              >
                {link.label}
              </div>
            </a>
          );
        })}

        <Cta
          text={ctaData.quote.text}
          icon={`/icons/long_aero.svg`}
          className="border-none outline-none bg-baOrange text-baWhite p-3 px-4 ml-6 flex justify-center items-center"
        />
      </div>
    </>
  );
};

export default NavLinks;
