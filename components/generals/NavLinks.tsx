import Link from "next/link";
import React from "react";
import { navlinks, ctaData } from "../../modules/navlinks";
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

        <button
          className={
            "border-none outline-none bg-baOrange text-baWhite p-3 px-4 ml-6 flex justify-center items-center"
          }
        >
          {ctaData.quote.text}
          <span className="ml-4 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/long_aero.svg" alt="aero" />
          </span>
        </button>
      </div>
    </>
  );
};

export default NavLinks;
