import { FaCheckCircle, FaMapMarkerAlt, FaShieldAlt, FaDownload, FaBell, FaUser, FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const buildingImg =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80";

export default function InvestmentSuccess() {
    
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e6f4ef] flex items-center justify-center mb-4 sm:mb-5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1a7a5e] flex items-center justify-center">
              <FaCheck className="text-white" size={18} />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Investment Successful
          </h1>
          <p className="text-gray-500 text-sm sm:text-base text-center">
            Congratulations! You now own 1% of The Azure Heights.
          </p>
        </div>

        <div className="w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden">
            <img
              src={buildingImg}
              alt="The Azure Heights"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#f5c842] text-[#7a5e00] text-xs font-semibold px-3 py-1.5 rounded-full">
              <FaCheckCircle size={11} />
              VERIFIED ASSET
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Property Name
                </p>
                <p className="text-[#1a7a5e] font-bold text-lg sm:text-xl">
                  The Azure Heights
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mt-3 mb-1">
                  Location
                </p>
                <p className="flex items-center gap-1.5 text-gray-700 text-sm">
                  <FaMapMarkerAlt size={13} className="text-gray-400" />
                  Dubai, UAE
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  Total Amount Paid
                </p>
                <p className="text-gray-900 font-bold text-xl sm:text-2xl">
                  $25,000.00
                </p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mt-3 mb-1">
                  Transaction ID
                </p>
                <p className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-md font-mono inline-block">
                  SC-8829-1042
                </p>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mt-3 mb-1">
                  Date &amp; Time
                </p>
                <p className="text-gray-700 text-sm">
                  June 24, 2026 | 14:30 PM
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-5 grid grid-cols-2 gap-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shares Purchased</span>
              </div>
              <div className="text-right text-sm font-semibold text-gray-800">
                1 Share
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ownership %</span>
              </div>
              <div className="text-right text-sm font-semibold text-[#1a7a5e]">
                1.00%
              </div>
            </div>

            <div className="flex gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 mb-2">
              <div className="mt-0.5 shrink-0">
                <FaShieldAlt className="text-[#1a7a5e]" size={16} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Your investment is now active. You can track performance in
                  your portfolio and download legal documents in your dashboard.
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1 italic">
                  All documents are securely stored. Returns and updates will be
                  visible in your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl mt-5 flex flex-col sm:flex-row gap-3">
         
             <button className="flex-1 bg-[#1a7a5e] hover:bg-[#155f49] text-white font-semibold text-sm py-3 rounded-xl transition-colors">
             <NavLink to='/portfolio'> 
              Go to Portfolio
             </NavLink>
          
          </button>
     
        </div>

        <button className="mt-4 flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
          <FaDownload size={13} />
          Download Agreement
        </button>
      </main>

    
    </div>
  );
}