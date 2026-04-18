const BASE_URL = import.meta.env.VITE_BASE_URL;

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiSmartphone, FiCheckCircle, FiUsers, FiBarChart2, FiLock, FiCircle } from "react-icons/fi";
import axios from "axios";

import VerifyMobile from "../components/VerifyMobile";
import toast from "react-hot-toast";


const Login = () => {
    const [mobile, setMobile] = useState("");
    const [page, setPage ] = useState(0);
     const [mobileErr, setMobileErr] = useState("");

    const features = [
      { icon: <FiSmartphone />, label: "Secure OTP Login" },
      { icon: <FiCheckCircle />, label: "Verified Property Listings" },
      { icon: <FiUsers />, label: "Digital KYC Only at Investment" },
      { icon: <FiBarChart2 />, label: "Portfolio Tracking" },
    ];

    const submitHandler = async (e) => {
      e.preventDefault();

      if (!mobile.trim()) {
        setMobileErr("Mobile No. is required ❌");
        return;
      } 

      const obj = {
        phone: mobile,
        // otp: "123456",
      };

      console.log('boj', obj )
      try {
        const res = await axios.post(
          `${BASE_URL}/api/auth/send-otp`,
          obj
        );


        console.log("res", res,   res.data );

        // console.log("token", token  );
        // 9999999994

        // localStorage.setItem("token", token);
        setPage(1);

      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Error");
      }
    }

  return (

    <div> 

  
      <div className="relative top-0 flex flex-col  ">

      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 sm:px-10 py-5 bg-transparent">
        {/* <span className="text-white text-base sm:text-lg font-bold tracking-tight">
          Sovereign Estate
        </span> */}
        <div className="flex gap-4 sm:gap-6 items-center">
          {/* <a href="#" className="text-[#0F766E] text-sm sm:text-base font-medium   transition-colors">
            Explore Properties
          </a> */}
          {/* <NavLink to="/signup" className=" text-[#0F766E]   text-sm sm:text-base font-semibold underline hover:opacity-80 transition-opacity">
            Sign Up
          </NavLink> */}
         </div>
      </nav>
 
      <div className="flex flex-col lg:flex-row min-h-screen ">
        <div
          className="relative w-full lg:w-[58%] min-h-[480px] sm:min-h-[540px] lg:min-h-screen flex flex-col justify-end pb-12 sm:pb-16 px-6 sm:px-10 lg:px-14"
          style={{
            background: "linear-gradient(160deg, #1d6b52 0%, #1a5c47 30%, #155240 60%, #fff 130%)",
          }}
        >
          <div className="relative z-10 mt-20 lg:mt-0">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl   font-normal leading-tight mb-5 sm:mb-6">
              Invest in Real Estate<br />with Confidence
            </h1>
            <p className="text-white/75 text-sm sm:text-base lg:text-lg mb-10 sm:mb-12 max-w-lg leading-relaxed">
              Login to explore properties, track your portfolio, and invest in shares with complete transparency.
            </p>
            <ul className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="bg-white/15 text-white p-2 sm:p-2.5 rounded-lg text-base sm:text-lg flex-shrink-0">
                    {f.icon}
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">{f.label}</span>
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2.5 bg-[#ca8a04]/90 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full">
              <FiCircle className="text-white text-xs" />
              1 Share = 1% Ownership
            </div>
          </div>
        </div>
 
        <div className="w-full lg:w-[42%] bg-[#f5f5f0] flex flex-col justify-center px-5 sm:px-10 md:px-14 lg:px-10 xl:px-14 py-10 sm:py-14 lg:py-20">
          <div className="w-full max-w-md mx-auto lg:mx-0">
           
           
            <div className="  bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-5">
             
            <div>
              <form onSubmit={submitHandler} className=" "> 
             <div> 
              <h2 className="text-[#1a1a1a] text-2xl sm:text-3xl font-bold mb-1.5">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7">
                Login using your mobile number
              </p>
 
              <div className="mb-4">
                <label className="block text-[#1a1a1a] text-sm font-semibold mb-2">
                  Mobile Number
                </label>
                <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#1a5c47]/30 transition-all bg-white">
                  <div className="bg-white px-3 sm:px-4 py-3.5 text-sm font-semibold text-gray-700 border-r border-gray-200 flex items-center flex-shrink-0">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={mobile}

                    onChange={(e) => {
                      const value = e.target.value;
                      // sirf numbers allow
                      if (!/^\d*$/.test(value)) return;
                      setMobile(value);
                      // typing pe error hata
                      setMobileErr("");
                    }}

                    maxLength={10}
                    minLength={10}
                    className="flex-1 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none bg-white min-w-0"
                  />
                  
                </div>
                <div className=" "> 
                 {mobileErr && (
                  <p className="text-red-500 text-xs mt-1">{mobileErr}</p>
                )}
                </div>
                <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                  <FiLock className="flex-shrink-0 text-gray-400 text-xs" />
                  We'll send a one-time password to verify your login
                </p>
              </div>
 
              <button className="w-full bg-[#1a5c47] hover:bg-[#155240] active:bg-[#0f3d2e] text-white font-bold py-4 rounded-xl text-sm sm:text-base tracking-wide transition-colors mb-6">
                Send OTP
              </button>
 
              <div className="border-t border-gray-100 pt-5 space-y-3 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <NavLink to="/signup" className=" text-[#1a5c47] font-semibold hover:opacity-70 transition-opacity">
                  Sign Up
                </NavLink>
                 
                </p>
               

                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <a href="#" className="hover:text-gray-700 transition-colors">
                    Forgot / Verify Number
                  </a>
                  <span className="text-gray-300">|</span>

                </div>
              </div>
            </div>
 
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 sm:px-6 py-4 mb-5">
              <div className="flex items-center gap-2.5">
                <FiLock className="text-[#1a5c47] text-base flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  Your mobile number is securely verified through OTP
                </p>
              </div>
            </div>
 
            <div className="text-center space-y-2.5 px-2">
              <p className="text-xs sm:text-sm text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-[#1a1a1a] font-semibold underline hover:opacity-70">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#1a1a1a] font-semibold underline hover:opacity-70">
                  Privacy Policy
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Need help accessing your account?{" "}
                <a href="#" className="text-[#1a5c47] font-semibold hover:opacity-70 transition-opacity">
                  Contact Support       
                </a>
              </p>
            </div>

            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* <footer className="bg-[#f5f5f0] border-t border-gray-200 px-6 sm:px-10 py-4 flex justify-between items-center">
        <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-widest uppercase">
          Sovereign Curator — Digital Assets Group
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-widest uppercase">
          Est. 2024
        </p>
      </footer> */}
       </div>
 
     <div>
      {page == 1 && (
         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
         <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg   relative">
           
           <button
             onClick={() => setPage(0)}
             className="absolute top-7 right-8 text-gray-500 text-xl"
           >
             ✕
           </button>
          <VerifyMobile  mobile={mobile} setPage={setPage}  />

          </div>
          </div>
      )}
     </div>

  

    </div>
  )
}

export default Login


//   primary #0F766E 

// secondry #134E4A
// tertiary #D4A017

// neutral #0F172A


