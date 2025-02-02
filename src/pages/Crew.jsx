import Header from "../components/Header";
import { crew } from "../../data.json";
import { useState } from "react";

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [staff, setStaff] = useState(crew[currentIndex]);

  function handleCrewSelect(i) {
    setCurrentIndex(i);
    setStaff(crew[i]);
  }

  return (
    <div className="crew-bg p-[24px] lg:overflow-y-hidden">
      <Header />
      <div className=" text-white text-center lg:text-left ">
        <p className="text-white sm:text-start sm:mt-8 lg:px-24 my-8">
          <span className=" text-stone-400 mr-4">01</span> MEET YOUR CREW
        </p>
        <div className=" sm:px-24 sm:mt-24 lg:flex">
          <div className=" lg:flex-1">
            <div className=" mb-6">
              <h2 className=" text-xl sm:text-2xl text-stone-300">
                {staff.role}
              </h2>
              <h1 className=" text-3xl sm:text-4xl">{staff.name}</h1>
            </div>
            <article>
              <p className=" text-sm sm:text-base text-stone-200">
                {staff.bio}
              </p>
            </article>
            <div className=" flex items-center gap-4 lg:gap-8 justify-center lg:justify-start mt-12 lg:mt-28 sm:mb-12">
              {crew.map((member, index) => (
                <div
                  onClick={() => handleCrewSelect(index)}
                  key={member.name}
                  className={`${
                    currentIndex === index ? "active-crew" : ""
                  } w-3 h-3 rounded-full bg-slate-400 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
          <div className=" lg:flex-1 lg:-my-16">
            <img
              className=" w-64 h-64 mx-auto sm:w-96 sm:h-96 my-4"
              src={staff.images.png}
              alt={`photo of ${staff.name}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
