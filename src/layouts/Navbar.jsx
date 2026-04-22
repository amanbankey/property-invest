import React from "react";
import { useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LuLogOut } from "react-icons/lu";
import ProfileDropdown from "../components/ProfileDropdown";
import { CgProfile } from "react-icons/cg";

import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [open, setOpen] = useState(true);
  const isLoggedIn = !!localStorage.getItem("token");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  console.log('op', open)
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setOpen(false);
    toast.success("Logout successfully ");
  };

  const onDashboard = () => {
    navigate('/dashboard');
    setMobileMenuOpen(false);
  }
  return (
    <div className="z-20 shadow-lg  sticky top-0">
      <div className="">
        <nav className="  mx-auto   bg-white/40  transparent  rounded-2xl   backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 h-[65px] sm:h-[70px] lg:h-[75px] max-w-screen-2xl mx-auto">
            <NavLink to="/" className="flex-shrink-0 text-black duration-200">
               <img src="https://cdn-icons-png.flaticon.com/128/602/602175.png" className="object-contain w-10 10" />
            </NavLink>

            <div className="hidden lg:flex items-center gap-6 text-[16px] font-medium tracking-wide">
              <div className="py-1 transition hover:text-or">
                <NavLink
                  to="/"
                  className="flex-shrink-0 text-black duration-200"
                >
                  Home
                </NavLink>
              </div>
              <div className="py-1 transition hover:text-or">
                <NavLink to="/property"> Properties</NavLink>
              </div>
              <div className="py-1 transition hover:text-or">
              <NavLink to="/about">
               About 
               </NavLink>
        
                </div>
              <div className="py-1 transition hover:text-or">
                <NavLink to='/contact'>
                  Contact
                </NavLink>
                </div>
              {/* <div className="py-1 transition hover:text-or">about</div> */}

              <div className="py-1 transition px-2 rounded-lg   "></div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {!isLoggedIn && (
                <NavLink
                  to="/signup"
                  className="hidden sm:block px-4 py-2 bg-[#0F766E] hover:bg-[#0F766E] text-white rounded-lg  cursor-pointer"
                >
                  Get Started
                </NavLink>
              )}
              {!isLoggedIn && (
                <NavLink
                  to="/login"
                  className="hidden sm:block px-4 py-2 bg-[#0F766E] hover:bg-[#0F766E]   text-white  rounded-lg cursor-pointer "
                >
                  Login
                </NavLink>
              )}

          <div className="hidden lg:block"> 
            <div className="flex justify-center gap-3  ">
               {isLoggedIn && (
                <>
                  <CgProfile className="w-7 h-7" />
                  <ProfileDropdown handleLogout={handleLogout} />
                </>
              )}
            </div>
            </div>
             

              {/* cross and show button  */}
              {!mobileMenuOpen && (
                <button
                  className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                  <span className="w-5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
                  <span className="w-5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
                  <span className="w-5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
                </button>
              )}

              {mobileMenuOpen && (
                <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
                  <RxCross1 className="text-2xl block lg:hidden" />
                </button>
              )}
            </div>
          </div>

          <div
            className={[
              "lg:hidden overflow-hidden   transition-all duration-300 ease-in-out bg-white rounded-b-2xl",
              mobileMenuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-[15px] font-medium border-t border-gray-100">
              <NavLink
                to="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-[#0F766E] transition"
              >
                Home
              </NavLink>
              <NavLink
                to="/property"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#0F766E] transition"
              >
                Property
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 hover:text-[#0F766E] transition"
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#0F766E] transition"
              >
                Contact
              </NavLink>

              <div className="flex flex-col items-start gap-3 mb-5 ">
              {/* <NavLink to="/dashboard"> */}
              <button className="text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-2  rounded-lg "  
              onClick={onDashboard}> 
                Dashboard 
              </button>

               {/* </NavLink> */}
               <button className="text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-2  rounded-lg " onClick={handleLogout} > Logout </button>
              </div>

            </div>

            <div className="flex justify-start gap-3 pb-5">
              {!isLoggedIn && (
                <NavLink onClick={() => {
                  setMobileMenuOpen((prev) => !prev)
                }}
                  to="/signup"
                  className="sm:hidden w-40 text-center block  px-4 py-2 bg-[#0F766E] hover:bg-[#0F766E] text-white rounded-lg  cursor-pointer"
                >
                  Get Started
                </NavLink>
              )}
              {!isLoggedIn && (
                <NavLink onClick={() => {
                  setMobileMenuOpen((prev) => !prev)
                }}
                  to="/login"
                  className="sm:hidden w-40 text-center block px-4 py-2 bg-[#0F766E] hover:bg-[#0F766E] border-2 text-white  rounded-lg cursor-pointer "
                >
                  Login
                </NavLink>
              )}

             

              {/* <div className=" flex justify-center gap-3 mb-5 z-40">
                 {isLoggedIn && (
                <>
                  <CgProfile className="w-7 h-7" />
                  <ProfileDropdown handleLogout={handleLogout} />
                </>
              )}
              </div> */}


             
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
