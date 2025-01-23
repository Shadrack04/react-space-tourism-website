import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" text-center mt-6">
      <h1 className=" text-white text-xl">
        SO, YOU WANT TO TRAVEL TO{" "}
        <span className=" block text-6xl mt-4 mb-10 tracking-widest">
          SPACE
        </span>
      </h1>
      <article>
        <p className=" text-md text-white">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <div className=" mt-8">
        <button className=" h-44 w-44 rounded-full bg-white animate-pulse uppercase text-2xl">
          Explore
        </button>
      </div>
    </div>
  );
}

export default HomePage;
