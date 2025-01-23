import React from "react";
import Logo from "./Logo";
import NavPage from "./NavPage";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className=" flex items-center justify-between">
      <Logo />
      <div className=" sm:hidden z-10">
        <img src={hamburger} alt="Hamburger menu icon" />
      </div>
      <NavPage />
    </header>
  );
}

export default Header;
