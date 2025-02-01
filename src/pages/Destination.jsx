import { useState } from "react";
import { destinations } from "../../data.json";
import Header from "../components/Header";
import PropTypes from "prop-types";

function Destination({ isLargeScreen }) {
  const [planets] = useState(destinations);
  const [location, setLocation] = useState(planets[0]);

  return (
    <div className="destination-bg p-[24px]">
      <Header isLargeScreen={isLargeScreen} />
      <p className="text-white sm:mt-8 lg:mx-[15%]">
        <span className=" text-stone-400 mr-4">01</span> PICK YOUR DESTINATION
      </p>
      <div className=" flex items-center flex-col lg:flex-row sm:px-48 lg:mt-8">
        <div className=" flex-1">
          <div>
            <img
              className=" w-44 h-44 sm:w-64 sm:h-64 my-4"
              src={location.images.png}
              alt={location.name}
            />
          </div>
        </div>

        <div className=" flex-1 sm:min-w-[500px]">
          <div className="">
            <div className=" text-center lg:text-start pt-2">
              {planets.map((planet, index) => (
                <button
                  onClick={() => setLocation(planets[index])}
                  className={` text-stone-300 hover:text-white mx-2 uppercase hover:underline hover:underline-offset-[12px]`}
                  key={planet.name}
                >
                  {planet.name}
                </button>
              ))}
            </div>
            <h1 className="text-white lg:text-start planet-name tracking-widest text-center text-6xl font-medium my-4 uppercase">
              {location.name}
            </h1>
            <article className=" border-b-2 border-stone-700 pb-8">
              <p className=" lg:text-start text-center text-stone-300 text-sm sm:text-base tracking-wider">
                {location.description}
              </p>
            </article>
          </div>

          <div className=" text-white my-4 mx-auto text-center sm:text-start tracking-wide sm:flex sm:items-center sm:justify-around lg:justify-normal gap-16">
            <div className=" mb-4 flex flex-col gap-1">
              <p className=" text-stone-300">AVG. DISTANCE</p>
              <p className=" text-2xl font-semibold uppercase">
                {location.distance}
              </p>
            </div>
            <div className=" mb-4 flex flex-col gap-1">
              <p className=" text-stone-300">EST. TRAVEL TIME</p>
              <p className=" text-2xl font-semibold uppercase">
                {location.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Destination.propTypes = {
  isLargeScreen: PropTypes.bool,
};

export default Destination;
