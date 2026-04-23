
import { useState } from "react";
import { FiCheckCircle, FiShield, FiLock, FiMapPin, FiMinus, FiPlus, FiCheck, FiAlertCircle } from "react-icons/fi";
import { MdVerified, MdOutlineAccountBalance } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { NavLink, Navigate, useNavigate } from "react-router-dom";



function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {[
        { icon: <FiLock size={13} />, label: "SECURE PAYMENT" },
        { icon: <MdVerified size={13} />, label: "VERIFIED PROPERTY" },
        { icon: <MdOutlineAccountBalance size={13} />, label: "TRANSPARENT OWNERSHIP" },
      ].map((b) => (
        <div key={b.label} className="flex items-center gap-1.5 bg-teal-700 text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-md">
          {b.icon}
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function PropertyCard() {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-sky-400 to-teal-600 flex items-center justify-center">
        <BsGraphUp size={32} className="text-white opacity-70" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">The Azure Heights</h3>
            <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 mt-0.5">
              <FiMapPin size={11} /> Dubai, UAE
            </p>
          </div>
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">15.5% ROI</span>
        </div>
        <div className="flex gap-6 mt-2">
          <div>
            <p className="text-gray-400 text-xs">Type</p>
            <p className="text-gray-800 text-sm font-semibold">Residential</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Share Price</p>
            <p className="text-gray-800 text-sm font-semibold">$25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareSelector({ shares, setShares }) {
  return (
    <div className="">
      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-3">Select Number of Shares</h3>
      <div className="border border-gray-200 bg-green-50 rounded-xl p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 ">
          <button
            onClick={() => setShares((s) => Math.max(1, s - 1))}
            className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition-all"
          >
            <FiMinus size={14} />
          </button>
          <span className="text-gray-900 font-semibold text-base w-4 text-center">{shares}</span>
          <button
            onClick={() => setShares((s) => s + 1)}
            className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center text-white hover:bg-teal-800 active:scale-95 transition-all"
          >
            <FiPlus size={14} />
          </button>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs">{shares} share{shares > 1 ? "s" : ""} = <span className="font-semibold text-gray-700">{shares}%</span> ownership</p>
          <p className="text-teal-700 font-bold text-lg sm:text-xl">Total: ${(shares * 25000).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

function ReferralCode({ code, setCode, applied, setApplied }) {
  return (
    <div>
      <p className="text-gray-500 text-xs font-semibold tracking-wide uppercase mb-2"> Broker Referral Code (Optional)</p>
      <div className="flex gap-2 items-center">
        <div className="flex-1 flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 px-3 py-2.5 text-sm text-gray-700 bg-white outline-none"
            placeholder="Enter referral code"
          />
          {applied && (
            <div className="flex items-center gap-1 pr-3 text-teal-600 text-xs font-semibold">
              <FiCheck size={13} /> Applied
            </div>
          )}
        </div>
        <button
          onClick={() => setApplied(true)}
          className="bg-teal-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-teal-800 active:scale-95 transition-all"
        >
          Apply
        </button>
      </div>
      {applied && <p className="text-teal-600 text-xs mt-1.5">Broker code applied successfully</p>}
    </div>
  );
}

function InvestmentBreakdown({ shares, applied }) {
  const investment = shares * 25000;
  const discount = applied ? 500 : 0;
  const total = investment - discount;
  return (
    <div className="border border-gray-100 rounded-xl p-4 bg-green-50">
      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-3">Investment Breakdown</h3>
      <div className="space-y-2 text-sm">
        {[
          { label: "Investment Amount", value: `$${investment.toLocaleString()}.00` },
          { label: "Platform Fee", value: "$0.00" },
          { label: "Taxes", value: "$0.00" },
        ].map((r) => (
          <div key={r.label} className="flex justify-between text-gray-600">
            <span>{r.label}</span>
            <span>{r.value}</span>
          </div>
        ))}
        {discount > 0 && (
          <div className="flex justify-between text-teal-600 font-medium">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-gray-900 text-base sm:text-lg">
          <span>Total Payable Amount</span>
          <span>${total.toLocaleString()}.00</span>
        </div>
      </div>
    </div>
  );
}

function AgreementRow({ agreed, setAgreed }) {
  return (
    <div className="flex items-start gap-3">
      <button
        onClick={() => setAgreed((a) => !a)}
        className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${agreed ? "bg-teal-700 border-teal-700" : "border-gray-300 bg-white"}`}
      >
        {agreed && <FiCheck size={10} className="text-white" />}
      </button>
      <p className="text-gray-500 text-xs sm:text-sm">
        I agree to the investment terms, ownership structure, and legal documentation.{" "}
        <span className="text-teal-700 cursor-pointer underline">View Agreement</span>
      </p>
    </div>
  );
}

function InvestmentSummary({ shares }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 shadow-sm">
      <h3 className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">Investment Summary</h3>
      <div className="space-y-3">
        {[
          { label: "Property", value: "The Azure Heights" },
          { label: "Location", value: "Dubai, UAE" },
          { label: "Share Price", value: "$25,000", bold: true },
          { label: "Selected Shares", value: `${shares} Share${shares > 1 ? "s" : ""}`, bold: true },
          { label: "Ownership %", value: `${shares}.00%`, teal: true, bold: true },
        ].map((r) => (
          <div key={r.label} className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{r.label}</span>
            <span className={`${r.teal ? "text-teal-700" : "text-gray-900"} ${r.bold ? "font-bold" : ""}`}>{r.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-gray-50 rounded-lg p-4">
        <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">Financial Snapshot</p>
        <div className="flex gap-4">
          <div>
            <p className="text-gray-400 text-xs">Estimated Annual</p>
            <p className="text-gray-900 font-bold text-base">${(3875 * shares).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Monthly Income</p>
            <p className="text-gray-900 font-bold text-base">${(322 * shares).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FundingProgress() {
  return (
    <div className="bg-green-50 border border-gray-100 rounded-xl p-4 sm:p-5 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-600 text-sm font-semibold">Funding Progress</p>
        <span className="text-gray-900 font-bold text-sm">88%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
        <div className="bg-teal-600 h-2 rounded-full" style={{ width: "88%" }} />
      </div>
      <p className="text-gray-400 text-xs italic">Only $1.2M remaining for this premium asset cycle.</p>

      <div className="flex justify-around mt-5 pt-4 border-t border-gray-100">
        {[
          { icon: <FiShield size={18} />, label: "SECURE\nTRANSACTION" },
          { icon: <MdVerified size={18} />, label: "VERIFIED\nLISTING" },
          { icon: <HiOutlineDocumentText size={18} />, label: "LEGAL\nPROTECTION" },
        ].map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-1 text-teal-700">
            {b.icon}
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-semibold text-center whitespace-pre-line leading-tight">{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Checkout() {
  const navigate = useNavigate()
  const [shares, setShares] = useState(1);
  const [code, setCode] = useState("SOVEREIGN2024");
  const [applied, setApplied] = useState(true);
  const [agreed, setAgreed] = useState(false);
  
  const onSubmit = () => {
    navigate('/kyc')

  }

  return (
    <div className="min-h-screen bg-white font-sans">
   
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">Confirm Your Investment</h1>
          <p className="text-gray-500 text-sm sm:text-base mb-4">Review details, select shares, and proceed securely.</p>
          <TrustBadges />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-5">
            <PropertyCard />
            <ShareSelector shares={shares} setShares={setShares} />
            <ReferralCode code={code} setCode={setCode} applied={applied} setApplied={setApplied} />
            <InvestmentBreakdown shares={shares} applied={applied} />
            <AgreementRow agreed={agreed} setAgreed={setAgreed} />
            <button
              className={`w-full py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all
              active:scale-[0.98] ${agreed ? "bg-teal-700 text-white hover:bg-teal-800" : "bg-teal-700/60 text-white  "}`}
              disabled={!agreed}
              onClick={onSubmit}
            >
              
                  Proceed to Payment
             
            
            </button>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <InvestmentSummary shares={shares} />
            <FundingProgress />
          </div>
        </div>
      </main>

    </div>
  );
}

