// This component displays details of a SpaceX capsule and allows the user to close the modal.
import logo from "./logo.png";

export const CapsuleDetails = ({ capsule, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0"></div>
      <div className=" p-8 z-10 text-white bg-black bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-s ">
        <div>
          {/* SpaceX logo */}
          <img
            className="block m-auto w-[150px] mix-blend-multiply"
            src={logo}
            alt=""
          />
        </div>
        <div className="mt-7 flex md:flex-row justify-center flex-col ">
          {/* Loading animation */}
          <img
            className="w-[400px] m-auto text-white"
            src="https://i.gifer.com/embedded/download/BHJl.gif"
            alt=""
          />
        </div>
        <h2 className="text-2xl mt-3 font-semibold mb-4">
          {/* Displaying capsule serial number */}
          {capsule.capsule_serial} Details
        </h2>
        <div className="text-left">
          <p>
            {/* Displaying capsule status */}
            <strong>Status:</strong> {capsule.status}
          </p>
          <p>
            {/* Displaying original launch date */}
            <strong>Original Launch:</strong> {capsule.original_launch}
          </p>
          <p>
            {/* Displaying capsule type */}
            <strong>Type:</strong> {capsule.type}
          </p>
          <p>
            {/* Displaying reuse count */}
            <strong>Reuse Count:</strong> {capsule.reuse_count}
          </p>
          <p className="mb-4">
            {/* Displaying capsule details */}
            <strong>Details:</strong> {capsule.details}
          </p>
        </div>
        {/* Close button to close the modal */}
        <button
          onClick={closeModal}
          className="bg-[#fff] w-[180px] py-2 px-4 rounded border-[3px] border-black font-[poppin] font-bold text-[#333] transition-colors duration-300 hover:text-[#fff] hover:bg-black m-auto ease-in-out hover:scale-110"
        >
          Close
        </button>
      </div>
    </div>
  );
};
