import React from "react";
import CloseIconComp from "./CloseIconComp";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  black?: boolean;
  menuHandler: () => void;
}

const MobileMenu = ({ black, menuHandler }: MobileMenuProps) => {
  return (
    <div
      className={
        black
          ? "absolute inset-0 bg-baWhite h-screen flex justify-center items-center lg:hidden"
          : "absolute inset-0 bg-baBlack h-screen flex justify-center items-center lg:hidden"
      }
    >
      <CloseIconComp
        size={50}
        className={
          black
            ? "absolute top-[1rem] right-[2rem] text-[2rem] text-baBlack"
            : "absolute top-[1rem] right-[2rem] text-[2rem] text-baWhite"
        }
        onClick={menuHandler}
      />
      <NavLinks
        className={
          black
            ? "flex flex-col lg:hidden justify-between items-center text-baBlack text-[2rem] h-[50%]"
            : "flex flex-col lg:hidden justify-between items-center text-baWhite text-[2rem] h-[50%]"
        }
      />
    </div>
  );
};

export default MobileMenu;
