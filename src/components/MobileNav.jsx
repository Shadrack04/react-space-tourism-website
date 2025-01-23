import React from "react";
import { Link } from "react-router-dom";

function MobileNav({ isLargeScreen, isOpenNav }) {
  if (isLargeScreen) return;

  const slideIn = {};

  return (
    <div className=" absolute inset-0 flex justify-end ">
      <nav
        style={
          isOpenNav
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-75%)" }
        }
        className="bg-black z-10 bg-opacity-10 backdrop-blur-lg w-[75%] h-full px-6 py-32 transition-transform duration-300 animate-slideIn"
      >
        <ul className=" flex flex-col gap-4">
          <li className=" text-white text-lg uppercase">
            <Link to="/">
              <span className=" mr-2 font-bold text-xl">01</span>Home
            </Link>
          </li>
          <li className=" text-white text-lg uppercase">
            <Link to="/destination">
              <span className=" mr-2 font-bold text-xl">02</span>Destination
            </Link>
          </li>
          <li className=" text-white text-lg uppercase">
            <Link to="/crew">
              <span className=" mr-2 font-bold text-xl">03</span>Crew
            </Link>
          </li>
          <li className=" text-white text-lg uppercase">
            <Link to="/technology">
              <span className=" mr-2 font-bold text-xl">04</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
