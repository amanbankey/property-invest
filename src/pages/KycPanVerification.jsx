import { useState } from "react";
import { FiHelpCircle, FiBell, FiUser, FiCreditCard, FiFileText, FiCamera, FiHome, FiCheckSquare, FiArrowRight, FiShield, FiCheck, FiInfo } from "react-icons/fi";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const STEPS = [
  { icon: <FiUser size={16} />, label: "Basic Info" },
  { icon: <FiCreditCard size={16} />, label: "PAN Verify" },
  { icon: <FiFileText size={16} />, label: "ID Verify" },
  { icon: <FiFileText size={16} />, label: "Documents" },
  { icon: <FiCamera size={16} />, label: "Selfie" },
  { icon: <BsBank2 size={16} />, label: "Bank Details" },
  { icon: <FiCheckSquare size={16} />, label: "Review" },
];
import { useDispatch } from "react-redux";

import { setPan } from "../slices/kycslice";

const PROGRESS_STEPS = [1, 2, 3, 4];


 export default function KycPanVerification({setActive}) {
  const navigate = useNavigate();

  const [panNum, setPanNum] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const {  name,    } = useSelector((state) => state.kyc);

  const onSubmit = (e) => {
    e.preventDefault()
    setActive("id")
    // console.log('hello', panNum)
  
    dispatch(setPan({
       panNum:panNum
    }))
    try{
         
    }catch(err){

    }
  }
  return (
    <div className="min-h-screen  font-sans flex flex-col">
      

      <div className="flex flex-1 overflow-hidden">
        {/* <aside className="hidden md:flex w-52 lg:w-56 bg-white border-r border-gray-200 flex-col justify-between py-6 px-4 shrink-0">
          <div>
            <p className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest mb-0.5">KYC Verification</p>
            <p className="text-xs text-gray-400 mb-8">Sovereign Compliance</p>
            <nav className="space-y-1">
              {STEPS.map((s, i) => (
                <button key={s.label} onClick={() => setActiveStep(i)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${activeStep === i ? "text-emerald-800 font-semibold border-l-4 border-emerald-700 bg-emerald-50 rounded-l-none" : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"}`}>
                  <span>{s.icon}</span>
                  <span className="text-sm">{s.label}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="bg-emerald-800 rounded-2xl p-4 text-white">
            <p className="text-xs font-semibold mb-2">Completion Status</p>
            <div className="w-full bg-emerald-700 rounded-full h-1.5 mb-2">
              <div className="bg-emerald-300 h-1.5 rounded-full" style={{ width: "15%" }}></div>
            </div>
            <p className="text-xs text-emerald-200">15% Complete</p>
          </div>
        </aside> */}

        {/* <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex items-center gap-2 text-sm text-emerald-800 font-semibold">
            <FiCreditCard size={16} /> PAN Verify
            <FiArrowRight size={14} className={`transition-transform ${mobileMenuOpen ? "rotate-90" : ""}`} />
          </button>
          {mobileMenuOpen && (
            <div className="mt-2 space-y-1 pb-2">
              {STEPS.map((s, i) => (
                <button key={s.label} onClick={() => { setActiveStep(i); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm transition-colors ${activeStep === i ? "text-emerald-800 font-semibold bg-emerald-50" : "text-gray-500"}`}>
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          )}
        </div> */}

        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 flex flex-col items-center">
          <div className="w-full max-w-2xl ">
            {/* <div className="flex items-center justify-center gap-0 mb-8">
              {PROGRESS_STEPS.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${step === 1 ? "bg-emerald-700 text-white" : step === 2 ? "bg-emerald-700 text-white" : "bg-gray-200 text-gray-400"}`}>
                    {step === 1 ? <FiCheck size={18} /> : step}
                  </div>
                  {i < PROGRESS_STEPS.length - 1 && (
                    <div className={`h-0.5 w-16 sm:w-24 lg:w-32 mx-1 ${step < 2 ? "bg-emerald-700" : "bg-gray-200"}`}></div>
                  )}
                </div>
              ))}
            </div> */}


            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">PAN Verification</h1>
              <p className="text-gray-500 text-sm mb-7">Verify your tax identity to unlock investment limits.</p>
            
                  <form onSubmit={onSubmit}>
                    <div className="mb-5">
                      <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-2">
                        PAN Number <sup className="text-emerald-800">*</sup>
                      </label>

                      <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter pan number"
                            value={panNum}
                            onChange={(e) => {
                              const value = e.target.value;
                              setPanNum(value);
                            }}
                            required
                            maxLength={12}
                            minLength={12}
                            className="flex-1 sm:px-4 px-0 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-gray-50 min-w-0"
                          />
                        </div>

                        <div className="flex items-center gap-1.5">
                          <MdOutlineVerified  className="text-emerald-600" />
                          <span className="sm:text-xs text-[0.5rem] font-bold text-emerald-700 uppercase tracking-wider">
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3 mb-5">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <FiUser   className="text-emerald-700 sm:text-xl text-sm" />
                      </div>
                      <div>
                        <p className="text-[10px]  font-bold text-emerald-700 uppercase tracking-widest mb-0.5">
                          Name as per PAN
                        </p>
                        <p className="sm:text-base text-sm font-extrabold text-gray-900 tracking-wide">
                          {name}
                        </p>
                        <div className="hidden sm:flex items-center gap-1 mt-1">
                          <FiShield size={11} className="text-emerald-600  " />
                          <p className="sm:text-xs text-[0.6rem] text-gray-500 ">
                            Matches with your provided basic info
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-start gap-3 mb-8">
                      <FiShield size={18} className="text-gray-400 shrink-0 mt-0.5" />
                      <p className="sm:text-xs text-[0.6rem] text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-800">
                          Regulatory Compliance:
                        </span>{" "}
                        PAN is required for financial compliance under sovereign banking
                        regulations. Your data is encrypted and never stored on public servers.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-xs bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 rounded-2xl sm:text-base flex items-center justify-center gap-2 transition-colors mb-4"
                    >
                        Proceed to ID Verification
                      <FiArrowRight size={18} />
                    </button>
                  </form>
              {/* <button  className="w-full text-sm font-semibold text-gray-700 hover:text-gray-900 text-center transition-colors">
                Request Manual Review
              </button> */}
            </div>

           
          </div>
        </main>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-emerald-800 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-white text-xs font-semibold">Completion Status</p>
          <p className="text-emerald-300 text-xs">15% Complete</p>
        </div>
        <div className="w-24 bg-emerald-700 rounded-full h-1.5">
          <div className="bg-emerald-300 h-1.5 rounded-full" style={{ width: "15%" }}></div>
        </div>
      </div>
    </div>
  );
}