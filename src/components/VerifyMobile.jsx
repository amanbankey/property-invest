
import { useState, useEffect, useRef } from "react";
import { FiRadio, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BASE_URL;

import axios from 'axios';

export default function VerifyMobile({mobile, setPage}) {
    const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpErr, setOtpErr] = useState("")
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer === 0) { setCanResend(true); return; }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value.slice(-1);
    setOtp(updated);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const updated = [...otp];
    paste.split("").forEach((char, i) => { updated[i] = char; });
    setOtp(updated);
    const nextEmpty = updated.findIndex((v) => !v);
    inputRefs.current[nextEmpty === -1 ? 5 : nextEmpty]?.focus();
  };

  // const handleResend = () => {
  //   if (!canResend) return;
  //   setOtp(["", "", "", "", "", ""]);

  //   setTimer(30);
  //   setCanResend(false);
  //   inputRefs.current[0]?.focus();
    
  // };

  const handleResend = async (e) => {
    e.preventDefault()
    setOtpErr("")
    if (!canResend ) return;
    setOtp(["", "", "", "", "", ""]);
  
    const obj = {
      name: "User name",
      phone: mobile,
      agree: true,
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/auth/resend-otp`,  
        obj 
      );
  
      // console.log("OTP resent", res);

      setTimer(30);
      setCanResend(false);
      inputRefs.current[0]?.focus();
  
    } catch (err) {
      console.log("Error resend", err);
    }
  };


  const formatTimer = (t) => `00:${String(t).padStart(2, "0")}`;

  const handleSubmit = async(e) => {
    e.preventDefault()

    const finalOtp = otp.join("");
    // console.log("otp:", finalOtp);
    
    if (finalOtp.length === 6 && finalOtp === "123456") {

      const obj = {
        phone: mobile,
        otp: finalOtp,
      }
      try {
        const res = await axios.post(
          `${BASE_URL}/api/auth/verify-otp`,
          obj
        );
     
        let token = res.data.token;

         if(res.data.user.role === "investor" ) {
             setPage(0);
             navigate("/dashboard");
         }else {

         }
        console.log('res in login', res.data.user.role );
        localStorage.setItem("token", token);
      } catch (error) {
        // console.log(error);
        toast.error(error.response?.data?.message || "Error");
      }

    } else {
      // console.log("Invalid OTP");
      setOtpErr("Invalid OTP. Please try again")

    }
  };

  const maskMobile = (num) => {
    if (!num) return "";
    
    const last4 = num.slice(-4);
    const masked = "*".repeat(num.length - 4);
  
    return masked + last4;
  };

  return (
    <div> 

     
    <div
      className="  flex flex-col"
      style={{ background: "linear-gradient(150deg, #eef2ee 0%, #f0f4f0 40%, #e8ede8 100%)" }}
    >
     
      <div className=" flex-1 flex items-center justify-center px-4 sm:px-6 py-8  ">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 px-6 sm:px-8 md:px-10 ">
          <div className="flex justify-center mb-6 sm:mb-7">
            <div className="bg-[#e8f0ec] p-4 sm:p-5 rounded-2xl">
              <FiRadio className="text-[#1a5c47] text-2xl sm:text-3xl" />
            </div>
          </div>

          <div className="  ">
            <form onSubmit={handleSubmit}> 
          <div className="text-center mb-7 sm:mb-8">
            <h1 className="text-[#0f2820] text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
              Verify Mobile Number
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-1">
              Enter the 6-digit code sent to +91  {maskMobile(mobile)}.
            </p>
            <a href="#" className="text-[#1a5c47] text-sm sm:text-base font-medium hover:opacity-70 transition-opacity">
              Change number
            </a>
          </div>

          <div className=" flex justify-between gap-1.5 sm:gap-2 mb-1 " onPaste={handlePaste}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="tel"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`${
                  otpErr
                    ? 'border-2 border-red-400 text-red-500 focus:border-red-500'
                    : 'border-2 border-transparent focus:border-[#1a5c47] text-[#0f2820]'
                } w-full aspect-square max-w-[52px] 
                sm:max-w-[56px] md:max-w-[60px]
                text-center text-base sm:text-lg font-bold bg-[#f0f2f8] rounded-xl sm:rounded-2xl
                focus:bg-white outline-none transition-all placeholder-gray-400`}
                placeholder="•"
              />
            ))}

           
          </div>
           {
              otpErr && (
                <p className="text-red-500 ">{otpErr}</p>
              )
            }
          

          <button className="w-full bg-[#1a5c47] hover:bg-[#155240] active:bg-[#0f3d2e]
           text-white font-bold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-sm 
           sm:text-base tracking-wide transition-colors  sm:mb-6 mt-5 ">
            Verify OTP
          </button>

          <p className="text-center text-sm text-gray-500 mb-7 sm:mb-8">
            Didn't receive the code?{" "}
            <button
              onClick={handleResend}
              className={`font-semibold transition-colors ${canResend ? "text-[#1a5c47] hover:opacity-70 cursor-pointer" : "text-[#1a5c47] cursor-not-allowed opacity-70"}`}
            >
              {canResend ? "Resend now" : `Resend in ${formatTimer(timer)}`}

            </button>
          </p>

          <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
            <FiLock className="text-gray-400 text-xs" />
            <span className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase font-medium">
              Secure OTP Verification
            </span>
          </div>

          </form>
          </div>
        </div>
      </div>

    </div>


    </div>
   
  );
}