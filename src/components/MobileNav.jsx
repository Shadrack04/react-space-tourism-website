import React from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className=" absolute inset-0 flex justify-end ">
      <nav className="bg-black bg-opacity-10 backdrop-blur-md w-[60%] h-full px-6 py-32  ">
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
