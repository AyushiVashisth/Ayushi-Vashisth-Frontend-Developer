import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCapsules } from "../Redux/Capsule/capsule.api";

const Search = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define a mapping of select values to corresponding input placeholders
  const placeholderMap = {
    capsule_serial: "Capsule Serial No.",
    capsule_id: "Capsule Id",
    status: "Capsule status",
    type: "Capsule type",
  };

  const handleSearch = () => {
    if (state && value) {
      // Dispatch the custom getCapsules thunk action with search parameters
      dispatch(getCapsules(state, value))
        .then(() => {
          // Navigate to the capsule page (assuming this route exists)
          navigate("/capsule");
        })
        .catch((error) => {
          // Display an error toast if there is an error in fetching data
          toast.error("Failed to fetch data: " + error.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    } else {
      toast.error("Fill in all the fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Set the placeholder dynamically based on the selected state value
  const inputPlaceholder = placeholderMap[state] || "Select a search option";

  return (
    <div
      style={{
        backgroundImage: `url(https://www.americaspace.com/wp-content/uploads/2017/03/MIKEECHOSTAR.jpg)`,
      }}
      className="bg-cover bg-no-repeat bg-center w-[100%] md:h-[60vh] h-[90vh] grid place-items-center "
    >
      <div className="absolute">
        <ToastContainer />
      </div>
      <article className="md:w-[50%] w-[80%] md:h-auto  flex  text-center items-center justify-center    bg-white bg-opacity-30 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700 p-5">
        <div className="flex  md:flex-row flex-col justify-between md:w-[100%] w-[100%] gap-5  ">
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="block bg-[#333] text-[#fff] p-4 md:w-[35%] w-[80%] m-auto"
          >
            <option value={""}>Search capsules</option>
            <option value={"capsule_serial"}>Capsule Serial No.</option>
            <option value={"capsule_id"}>Capsule Id</option>
            <option value={"status"}>Capsule status</option>
            <option value={"type"}>Capsule type</option>
          </select>

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="block bg-[#333] text-[#fff] p-4 md:w-[35%] w-[80%] m-auto placeholder-text-white"
            type="text"
            placeholder={inputPlaceholder}
          />

          <button
            onClick={handleSearch}
            className="block bg-[#333] text-[#fff] p-4 md:w-[20%] w-[80%] m-auto"
          >
            Search
          </button>
        </div>
      </article>
    </div>
  );
};

export default Search;