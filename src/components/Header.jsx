import React, { useState } from "react";
import Logo from "./Logo";
import NavPage from "./NavPage";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import MobileNav from "./MobileNav";

function Header({ isLargeScreen }) {
  const [isOpenNav, setIsOPenNav] = useState(false);
  return (
    <header className=" flex items-center justify-between">
      <Logo />
      <div className=" sm:hidden z-20">
        <img
          onClick={() => setIsOPenNav((prev) => !prev)}
          src={isOpenNav ? closeIcon : hamburger}
          alt="Hamburger menu icon"
          className=""
        />
      </div>
      {isOpenNav && (
        <MobileNav isOpenNav={isOpenNav} isLargeScreen={isLargeScreen} />
      )}
      <NavPage />
    </header>
  );
}

export default Header;
