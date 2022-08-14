import React, { useState } from "react";
import HamburgerMenu from "../generals/HamburgerMenu";
import Logo from "../generals/Logo";
import MobileMenu from "../generals/MobileMenu";
import NavLinks from "../generals/NavLinks";

interface NavbarProps {
  black?: boolean;
}

const Navbar = ({ black }: NavbarProps) => {
  const [show, setShow] = useState(false);
  const menuHandler = () => setShow(!show);
  return (
    <div className="relative">
      <div className="flex justify-between p-6 px-8">
        <Logo black={black} />
        <NavLinks
          className={
            black
              ? "hidden lg:flex justify-center items-center text-baBlack"
              : "hidden lg:flex justify-center items-center text-baWhite"
          }
        />
        <HamburgerMenu
          size={40}
          className={
            black ? "lg:hidden text-baBlack" : "lg:hidden text-baWhite"
          }
          onClick={menuHandler}
        />
      </div>
      {show && <MobileMenu black={black} menuHandler={menuHandler} />}
    </div>
  );
};

export default Navbar;
