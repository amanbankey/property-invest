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

  // const [panNum, setPanNum] = useState('');
  const [panImage, setPanImage] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const {  name, panPreview   } = useSelector((state) => state.kyc);

  const onSubmit = (e) => {
    e.preventDefault();
    setActive("id")

    const formData = new FormData();
    formData.append("panImg", panFile);
    // console.log("Ready to send:", panFile);
 
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    setPanFile(file);  

    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(setPan({
        panPreview: reader.result  
      }));
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="sm:min-h-screen  font-sans flex flex-col">
      

      <div className="flex flex-1 overflow-hidden">
    
        <main className="flex-1 overflow-y-auto px-0 sm:px-8 py-6 flex flex-col items-center">
          <div className="w-full max-w-2xl ">
         


            <div className="bg-white rounded-3xl sm:shadow-xl shadow-md border border-gray-100 p-2 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">PAN Verification</h1>
              <p className="text-gray-500 text-sm mb-7">Verify your tax identity to unlock investment limits.</p>
            
                  <form onSubmit={onSubmit}>
                    <div className="mb-5">
                      <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 mb-2">
                       Upload PAN  <sup className="text-emerald-800">*</sup>
                      </label>

                      <div className="flex items-center justify-between border border-gray-200 rounded-xl  sm:px-4 py-3.5 bg-gray-50">
                        <div>
                        <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                                className="flex-1 sm:px-4 px-2 py-2  text-sm text-gray-700 outline-none bg-gray-50 min-w-0"
                              />
                        </div>


                        <div className="flex items-center  gap-1.5">
                          <MdOutlineVerified  className="text-emerald-600" />
                          <span className="sm:text-xs text-[0.5rem] pr-3 sm:pr-0 font-bold text-emerald-700 uppercase tracking-wider">

                        {/* <div className="flex items-center gap-1.5">
                          <MdOutlineVerified  className="text-emerald-600" />
                          <span className="sm:text-xs text-[0.5rem] font-bold text-emerald-700 uppercase tracking-wider"> */}

                            Verified
                          </span>
                        </div>
                      </div>

                      {panPreview && (
                          <img
                            src={panPreview}
                            alt="PAN Preview"
                            className="mt-2 h-20"
                          />
                        )}
                    </div>

                    {/* <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3 mb-5">
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
                    </div> */}

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