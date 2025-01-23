import React, { useState } from "react";
import { destinations } from "../../data.json";

function Destination() {
  const [planets] = useState(destinations);
  const [location, setLocation] = useState(planets[0]);
  console.log(planets);
  console.log(".".concat(location.images.png));
  return (
    <div>
      <div>
        <p className="text-white">
          <spa>01</spa> PICK YOUR DESTINATION
        </p>
        <div>
          <img src="../assets/destination/image-moon.png" alt={location.name} />
        </div>

        <div>
          <div>
            {planets.map((planet) => (
              <button
                className=" text-white mx-2 uppercase hover:underline hover:underline-offset-[12px]"
                key={planet.name}
              >
                {planet.name}
              </button>
            ))}
          </div>
          <h1>{location.name}</h1>
          <article>
            <p>{"../../".concat(location.description)}</p>
          </article>
        </div>

        <div>
          <div>
            <p>AVG. DISTANCE</p>
            <p>{location.distance}</p>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p>{location.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
