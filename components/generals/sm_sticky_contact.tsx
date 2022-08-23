import Link from "next/link";
import React from "react";
import { useSection } from "../../context";
import { sectionsData } from "../../modules/sections";
import Cta from "./Cta";

const StickyContactUs = () => {
  const { dispatch } = useSection();
  return (
    <div className="flex justify-between w-full px-6 py-2">
      <div className="flex-1 flex justify-center items-start flex-col">
        <div className="text-xl font-fracRegular text-baWhite md:text-3xl block md:flex md:gap-4 ">
          <p>{sectionsData.section5.txt1}</p>
          <p className="text-baOrange">{sectionsData.section5.txt2}</p>
          <p className="mb-[0.5rem]">{sectionsData.section5.txt3}</p>
        </div>
        <div className="flex justify-between items-center w-[80%] md:w-[50%] flex-wrap gap-1">
          {sectionsData.section5.socialIcons.map((icon, i) => {
            return (
              <Link href="#" key={i}>
                <a>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    key={i}
                    width={15}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center flex-1">
        <Cta
          text="Send your idea!"
          className="border-none outline-none bg-baWhite text-baBlack font-bold p-2 flex justify-center items-center text-[0.8rem] md:text-[1rem] font-manrBold mb-2 w-[80%] md:w-[50%]"
          onClick={() => dispatch({ type: "SEC-5" })}
        />
        <div className="text-baWhite">{sectionsData.section5.email}</div>
      </div>
    </div>
  );
};

export default StickyContactUs;
