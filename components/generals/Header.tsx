import React from "react";
import { useSection } from "../../context";
import Navbar from "../header";

const Header = () => {
  const { state } = useSection();
  return (
    <header className="fixed w-full z-50">
      <Navbar black={state.navBlack} />
    </header>
  );
};

export default Header;
