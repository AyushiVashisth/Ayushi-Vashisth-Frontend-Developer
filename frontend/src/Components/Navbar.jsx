import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { IoMdContact } from "react-icons/io";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, status,message } = useSelector((store) => store.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(user,message,status)

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen((prev) => !prev);
    setIsLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsLoginDropdownOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="sticky top-0 z-[5]">
      <nav
        className="flex md:justify-around md:p-0 px-2 justify-between items-center w-full mx-auto h-[60px] font-[poppin] bg-transparent absolute bg-black bg-opacity-10 backdrop-blur-lg"
      >
        <div className="overflow-hidden">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer w-[180px] h-[70px] mt-[-22px]"
            src={logo}
            alt=""
          />
        </div>
        <div
  className={`nav-links transition-all duration-1000 md:static md:bg-transparent bg-[#333] absolute text-white z-[5] md:min-h-fit min-h-[100vh] top-[99%] ${
    isMenuOpen ? "left-0" : "left-[200%]"
  } md:w-auto w-[100%] flex items-center px-5 text-center bg-black bg-opacity-20 backdrop-blur-lg p-8 font-black text-[20px]  md:text-[16px]`}
>
          <ul className="w-full md:w-auto -mt-[90px] flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10 md:m-auto">
            <li>
              <a href="/flacon" className="relative inline-block group ">FLACON9 <span class="origin-right absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transform-origin-left group-hover:scale-x-100 group-hover:origin-left
               transition-transform duration-300 ease-in-out"></span></a>
            </li>

            <li>
              <a href="/dragon" className="relative inline-block group">DRAGON <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transform-origin-right group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></a>
            </li>
            <li>
              <a href="/startship" className="relative inline-block group">STARSHIP <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transform-origin-right group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></a>
            </li>
            <li>
              <a href="/rideshare" className="relative inline-block group">RIDESHARE <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transform-origin-right group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></a>
            </li>
            <li>
              <a href="/flacon" className="relative inline-block group">STARSHIELD <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transform-origin-right group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></a>
            </li>
            <li>
              <a href="/startship" className="relative inline-block group">STARLINK <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 transform-origin-right group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span></a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative mt-2">
            <button
              onClick={toggleLoginDropdown}
              className="text-2xl text-white cursor-pointer"
            >
              <IoMdContact />
            </button>
            {isLoginDropdownOpen && (
              <div className="absolute top-[2.5rem] right-0 bg-white shadow-md rounded-md p-3 w-30">
                {status ? <div>{user}</div> : <div onClick={openLoginModal}>Login/SignIn</div>}
              </div>
            )}
          </div>
          <button
            onClick={toggleMenu}
            className="text-3xl mr-4 cursor-pointer md:hidden text-[#fff]"
          >
            {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
      <ToastContainer/>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onRequestClose={closeLoginModal}
        />
      )}
    </div>
  );
}

export default Navbar;
