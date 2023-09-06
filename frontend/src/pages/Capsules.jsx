import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCapsules, getCapsulesSuccess, getCapsulesFailure } from "../Redux/CapsuleThunks";
import { Pagination } from "../Components/Pagination";
import { CapsuleDetails } from "../Components/CapsuleDetails";
import { getCapsules } from "../Redux/Capsule/capsule.api";
import { getCapsulesSuccess } from "../Redux/Capsule/capsule.actions";
import { hardcodedImages } from "../utils/data";

const Capsules = () => {
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state.capsule.capsules);

  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const capsulesPerPage = 10;

  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = capsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const closeModal = () => {
    setSelectedCapsule(null);
  };

  const handleCapsuleData = (value) => {
    // Assuming you have a function like getCapsules(stateKey, stateValue) in your Redux Thunks
    dispatch(getCapsules(value));
  };

  useEffect(() => {
    // Dispatch an initial action to fetch data when the component mounts
    dispatch(getCapsulesSuccess([])); // Provide initial data or an empty array
  }, [dispatch]);

  return (
    <div
      className="relative bg-cover bg-center  "
      style={{
        backgroundImage: `url("https://www.spacex.com/static/images/falcon-9/refresh/F9_DM2_LAUNCH_3840x2560.jpg")`,
      }}
    >
      <div className="bg-black bg-opacity-50  py-8 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#fff] mb-8 ">
            SpaceX Capsules
          </h1>
          <div className="mt-9 md:w-[200px] md:absolute md:top-16 md:right-20">
            {/* Dropdown for changing capsule data */}
            <select
              onChange={(e) => handleCapsuleData(e.target.value)}
              className="block text-[#333] rounded bg-[#fff] p-2 md:w-full w-[80%] m-auto"
            >
              <option value={""}>Change Capsule</option>
              <option value={"upcoming"}>Upcoming Capsule</option>
              <option value={"past"}>Past Capsule</option>
            </select>
          </div>
          <div className="w-[90%] m-auto mt-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Display capsules as cards */}
            {currentCapsules.map((capsule, i) => (
              <div
                key={capsule.capsule_serial}
                className="rounded-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105  cursor-pointer text-white bg-black bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-s"
                onClick={() => handleCapsuleClick(capsule)}
              >
                <div className="relative overflow-hidden">
                  {/* Display capsule image */}
                  <img
                    src={hardcodedImages[i % hardcodedImages.length]}
                    alt={capsule.capsule_serial}
                    className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                  />
                  {/* Add a gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  {/* Display capsule serial number */}
                  <h2 className="text-2xl font-extrabold mb-2">
                    {capsule.capsule_serial}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* Render pagination component for navigating between pages */}
          <Pagination
            capsulesPerPage={capsulesPerPage}
            totalCapsules={capsules.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          {/* Render the capsule details modal when a capsule is selected */}
          {selectedCapsule && (
            <CapsuleDetails capsule={selectedCapsule} closeModal={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Capsules;
