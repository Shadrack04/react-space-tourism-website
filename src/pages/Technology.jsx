import Header from "../components/Header";
import { technology } from "../../data.json";
import { useState } from "react";

console.log(technology);

function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tech, setTech] = useState(technology[currentIndex]);

  function handleTechSelect(i) {
    setCurrentIndex(i);
    setTech(technology[i]);
  }

  return (
    <div className="technology-bg p-[24px]">
      <Header />
      <div>
        <p className="text-white text-center sm:text-start sm:mt-8 lg:px-24 my-8">
          <span className=" text-stone-400 mr-4">01</span> SPACE LAUNCHER 101
        </p>
        <div className=" lg:flex lg:flex-row-reverse lg:gap-8">
          <div className="  flex-1">
            <img
              className=" h-52 sm:h-[24rem] lg:h-96 w-full"
              src={tech.images.portrait}
              srcSet={tech.images.landscape}
              sizes="(max-width: 1024px) 738px, 100vw"
              alt={`Photo of a ${tech.name}`}
            />
          </div>
          <div className=" flex-1 text-white sm:px-24 sm:py-8 lg:py-0 lg:flex items-center lg:gap-16 lg:px-24">
            <div className=" flex lg:flex-col items-center justify-center gap-2 sm:gap-6 lg:gap-8 py-6">
              {technology.map((item, index) => (
                <div
                  key={item.name}
                  onClick={() => handleTechSelect(index)}
                  className={` ${
                    currentIndex === index ? "active-tech" : ""
                  } w-8 h-8 sm:w-12 sm:h-12  border-2 border-stone-500 flex items-center justify-center rounded-full cursor-pointer`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className=" text-center lg:text-start">
              <p className=" text-lg text-stone-300">THE TERMINOLOGY...</p>
              <p className=" uppercase text-3xl py-2">{tech.name}</p>
              <article>
                <p className=" text-xs sm:text-sm">{tech.description}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
