import React, { useState } from "react";

const Flacon = () => {
  // Create an array of dragons with a length of 2 (placeholder data)
  const dragons = new Array(2).fill(0);

  // Initialize state to manage the current dragon index
  const [currentDragonIndex, setCurrentDragonIndex] = useState(0);

  // Get the current dragon and the index of the next dragon
  const currentDragon = dragons[currentDragonIndex];
  const nextDragonIndex =
    currentDragonIndex < dragons.length - 1 ? currentDragonIndex + 1 : 0;
  const nextDragon = dragons[nextDragonIndex];

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url("https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Event-Images/Rocket-Launches/SpaceX/Starlink-Launches/SLC-40/Rocket_Launch_SpaceX_Starlink_SLC40.ashx?h=600&w=900&la=en&hash=6D7D301EE6E3BDBF9C905ACB2B34F233AC005F5A")`,
      }}
    >
      <div className="container  mx-auto flex flex-wrap items-center justify-center">
        {/* Display an embedded YouTube video for Falcon 9 */}
        <div className="w-full h-[60vh] md:w-1/2 p-4 order-2 md:order-1">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Z4TXCZG_NEY"
            title="Falcon 9 | Overview"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* Display text content about Falcon 9 */}
        <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
          {/* Display information about Falcon 9 */}
          <p className="text-gray-300 text-lg text-justify">
            The third version of the Falcon 9 was developed in 2014–2015 and
            made its maiden flight in December 2015. The Falcon 9 Full Thrust is
            a modified reusable variant of the Falcon 9 family with capabilities
            that exceed the Falcon 9 v1.1, including the ability to "land the
            first stage for geostationary transfer orbit (GTO) missions on the
            drone ship"[16][17] The rocket was designed using systems and
            software technology that had been developed as part of the SpaceX
            reusable launch system development program, a private initiative by
            SpaceX to facilitate rapid reusability of both the first–and in the
            long term, second—stages of SpaceX launch vehicles.[18] Various
            technologies were tested on the Grasshopper technology demonstrator,
            as well as several flights of the Falcon 9 v1.1 on which
            post-mission booster controlled-descent tests were being
            conducted.[19]
          </p>
        </div>

        {/* Display details of the next dragon */}
        <div className="w-full md:w-1/2 p-4 order-3">
          <h2 className="text-4xl font-semibold">{nextDragon.name}</h2>
          {/* Display information about the next dragon */}
          <p className="text-gray-300 text-lg text-justify">
            Falcon 9 Full Thrust (also known as Falcon 9 v1.2, with variants
            Block 1 to Block 5) is a partially reusable medium-lift launch
            vehicle, designed and manufactured by SpaceX. It was first designed
            in 2014–2015, with its first launch operations in December 2015. As
            of 2 September 2023, Falcon 9 Full Thrust had performed 232 launches
            without any failures. Based on the Lewis point estimate of
            reliability,[definition needed] this rocket is the most reliable
            orbital launch vehicle currently in operation.[10] On April 8, 2016,
            the Full Thrust version of the Falcon 9 family was the first launch
            vehicle on an orbital trajectory to successfully vertically land a
            first stage. The landing followed a technology development program
            conducted from 2013 to 2015. Some of the required technology
            advances, such as landing legs, were pioneered on the Falcon 9 v1.1
            version, but that version never landed intact. Starting in 2017,
            previously flown first-stage boosters were reused to launch new
            payloads into orbit.[11][12] This quickly became routine, in 2018
            and in 2019 more than half of all Falcon 9 flights reused a booster.
            In 2020 the fraction of reused boosters increased to 81%.
          </p>
        </div>

        {/* Display an embedded YouTube video for another event */}
        <div className="w-full h-[60vh] md:w-1/2 p-4 order-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nbJwrmeui8M"
            title="PSLV-C57/ Aditya-L1 Mission... The launch of Aditya-L1.... 02 September 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Flacon;
