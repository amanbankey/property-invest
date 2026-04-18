import { FiInfo, FiUser, FiShield, FiArrowRight } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AadharVerify = () => {
  const aadhaarNumber = "XXXX XXXX 1234";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8">
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
          Aadhaar Verification
        </h1>
        <p className="text-gray-500 text-sm mb-7">
          Verify your identity using Aadhaar to continue KYC process.
        </p>

        {/* Aadhaar Number */}
        <div className="mb-5">
          <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-2">
            Aadhaar Number <FiInfo size={14} className="text-gray-400" />
          </label>

          <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50">
            <span className="text-base font-bold text-gray-900 tracking-widest">
              {aadhaarNumber}
            </span>

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

        {/* Button */}
        <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-2 transition-colors mb-4">
          <NavLink to="/kyc-review">
            Proceed to Next Step
          </NavLink>
          <FiArrowRight size={18} />
        </button>

        <button className="w-full text-sm font-semibold text-gray-700 hover:text-gray-900 text-center">
          Request Manual Verification
        </button>
      </div>
    </div>
  );
};

export default AadharVerify;