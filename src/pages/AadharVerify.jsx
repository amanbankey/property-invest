import { FiInfo, FiUser, FiShield, FiArrowRight } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAadhaar } from "../slices/kycslice";

const AadharVerify = ({setActive}) => {
  const navigate = useNavigate(); 
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const dispatch = useDispatch();

  const formatAadhaar = (value) => { 
    const cleaned = value.replace(/\D/g, '').slice(0, 12);
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted");
  
    setActive("review")
    dispatch(setAadhaar({
      aadhaarNumber: aadhaarNumber,
    }))

  };
  return (
    <div className="flex items-center justify-center ">
      <div >
      <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6  sm:p-8"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
              Aadhaar Verification
            </h1>

            <p className="text-gray-500 text-sm mb-7">
              Verify your identity using Aadhaar to continue KYC process.
            </p>

        
            <div className="mb-5">
              <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-2">
                Aadhaar Number   <sup className="text-emerald-800">*</sup>
              </label>

           <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50">
               
             <input placeholder="Enter your Aadhar number"
               className="flex-1 sm:px-4 px-0 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-gray-50 min-w-0" 
                value={aadhaarNumber} 
                onChange={(e) => setAadhaarNumber(formatAadhaar(e.target.value))}
                type="text" 
                maxLength={14}
                required />
                <div className="flex items-center gap-1.5">
                  <MdOutlineVerified size={20} className="text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3 mb-5">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <FiUser size={18} className="text-emerald-700" />
              </div>

              <div>
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-0.5">
                  Name as per Aadhaar
                </p>

                <p className="text-base font-extrabold text-gray-900 tracking-wide">
                  SIDDHARTH MALHOTRA
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <FiShield size={11} className="text-emerald-600" />
                  <p className="text-xs text-gray-500">
                    Matches with your provided details
                  </p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-start gap-3 mb-8">
              <FiShield size={18} className="text-gray-400 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Secure Verification:
                </span>{" "}
                Aadhaar verification is required for KYC. Your data is encrypted and secure.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-2 transition-colors mb-4"
            >
              Proceed to Next Step
              <FiArrowRight size={18} />
            </button>

            <button
              type="button"
              className="w-full text-sm font-semibold text-gray-700 hover:text-gray-900 text-center"
            >
              Request Manual Verification
            </button>
          </form>
    
      </div>
    </div>
  );
};

export default AadharVerify;