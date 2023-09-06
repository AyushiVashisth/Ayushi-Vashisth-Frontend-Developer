import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { DataArray } from "../utils/data";

// LandingComponent displays a list of items with background images and allows users to open modal video players.
const LandingComponent = () => {
  // State to track the index of the currently open modal
  const [openModalIndex, setOpenModalIndex] = useState(null);

  // Function to open the modal for a specific index
  const openModal = (index) => {
    setOpenModalIndex(index);
  };

  // Function to close the modal
  const closeModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div>
      {/* Mapping over DataArray to render items */}
      {DataArray?.map((data, index) => {
        return (
          <div
            key={index}
            style={{ backgroundImage: `url(${data.bgImage})` }}
            className="bg-cover bg-no-repeat bg-center w-[100%] h-screen bg-[#333] relative"
          >
            <div className="absolute md:left-20 left-10 bottom-20 sm:w-[200px] md:min-w-[400px] text-[#fff]">
              <h3 className="md:text-[24px] text-[18px] font-[600]">
                {data.heading}
              </h3>
              <h1 className="md:text-4xl text-2xl font-[700]">
                {data.description}
              </h1>
              <label
                onClick={() => openModal(index)}
                className="mt-8 block h-[50px] w-[200px] text-lg text-center py-[9px] font-bold border-[3px] border-white text-white transition-all duration-400 ease-in-out z-10 hover:bg-white hover:text-[#333]"
              >
                LEARN MORE
              </label>
            </div>
            {/* Modal for playing videos */}
            {openModalIndex === index && (
              <div className="fixed inset-0 flex items-center justify-center z-50 w-[77vw] ">
                <div className="md:p-6 text-white bg-black bg-opacity-40 backdrop-blur-lg shadow-2xl rounded-s md:w-[50%] w-[90%] md:h-auto h-[75vh] p-5 pb-8">
                  <div className="flex justify-between mx-3">
                    <h3 className="text-3xl font-bold mx-auto">SpaceX</h3>
                    <button className="text-3xl" onClick={closeModal}>
                      <IoCloseSharp />
                    </button>
                  </div>
                  <div className="mt-4">
                    {/* Embedded iframe for playing videos */}
                    <img src={data.link} alt="" />
                    <h3 className="md:text-[14px] text-[18px] font-[600]">
                      {data.detailheading}
                    </h3>
                    <h1 className="md:text-3xl text-1xl font-[600]">
                      {data.detaildescription}
                    </h1>
                    <p text-8px>{data.paragraphs}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LandingComponent;
