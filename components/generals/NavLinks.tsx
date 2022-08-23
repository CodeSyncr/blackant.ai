import Link from "next/link";
import React, { useState } from "react";
import { cssClasses } from "../../utils/helpers";
import { navlinks, ctaData } from "../../modules/navlinks";
import Cta from "./Cta";
import HamburgerMenu from "./HamburgerMenu";
import LinkComp from "./LinkComp";

interface NavLinksProps {
  className: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <>
      <div className={className + " " + "font-manrMedium"}>
        {navlinks.map((link, idx) => {
          return (
            <Link key={idx} href={link.url} passHref>
              <LinkComp>{link.label}</LinkComp>
            </Link>
          );
        })}
        <Cta
          text={ctaData.quote.text}
          icon={`/icons/${ctaData.quote.icon}.svg`}
          className="border-none outline-none bg-baOrange text-baWhite p-3 px-4 ml-6 flex justify-center items-center"
        />
      </div>
    </>
  );
};

export default NavLinks;
