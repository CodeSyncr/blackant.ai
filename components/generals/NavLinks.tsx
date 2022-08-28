import Link from "next/link";
import React from "react";
import { useSection } from "../../context";
import { navlinks, ctaData } from "../../modules/navlinks";
import { cssClasses } from "../../utils/helpers";
import Cta from "./Cta";
import LinkComp from "./LinkComp";

interface NavLinksProps {
  className: string;
  menuClose?: () => void;
}

const NavLinks = ({ className, menuClose }: NavLinksProps) => {
  const { dispatch } = useSection();
  const quoteHandler = () => {
    dispatch({ type: "SEC-5" });
    menuClose?.();
  };
  const linkClick = (text: string) => {
    if (text === "How it's done") {
      return dispatch({ type: "analyse_model" });
    }
    if (text === "Features") {
      return dispatch({ type: "features" });
    }
    return dispatch({ type: "recent_project" });
  };
  const navLinkHandler = (text: string) => {
    linkClick(text);
    menuClose?.();
  };
  return (
    <>
      <div className={className + " " + "font-manrMedium"}>
        {navlinks.map((link, idx) => {
          return (
            <a
              key={idx}
              style={{ cursor: "pointer" }}
              onClick={() => navLinkHandler(link.label)}
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
          onClick={quoteHandler}
        />
      </div>
    </>
  );
};

export default NavLinks;
