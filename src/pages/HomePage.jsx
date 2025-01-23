import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" min-h-[85vh] text-center mt-6 lg:grid grid-cols-2 sm:mt-16 sm:mt-24">
      <div className=" ">
        <h1 className=" text-white text-xl sm:tracking-widest">
          SO, YOU WANT TO TRAVEL TO
          <span className=" block text-6xl sm:text-8xl mt-4 mb-10 tracking-widest">
            SPACE
          </span>
        </h1>
        <article className=" sm:w-[30rem] mx-auto ">
          <p className=" lg:ml-16 sm:w-[30rem] text-sm sm:text-lg text-white lg:text-left sm:text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
      </div>
      <div className=" mt-20 sm:mt-24">
        <button className=" h-44 w-44 rounded-full bg-white animate-pulse uppercase text-2xl">
          Explore
        </button>
      </div>
    </div>
  );
}

export default HomePage;
