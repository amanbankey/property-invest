import { useState } from "react";
import { FiUser, FiCreditCard, FiFileText, FiCamera, FiHome, FiCheckSquare, FiBell, FiShield, FiLock, FiCheck } from "react-icons/fi";
import { MdOutlineAccountBalance, MdTrendingUp } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const steps = [
  { key: "basic", label: "BASIC INFO", icon: <FiUser size={16} /> },
  { key: "pan", label: "PAN VERIFY", icon: <FiCreditCard size={16} /> },
  { key: "id", label: "ID VERIFY", icon: <FiFileText size={16} /> },
  { key: "docs", label: "DOCUMENTS", icon: <HiOutlineDocumentText size={16} /> },
  { key: "selfie", label: "SELFIE", icon: <FiCamera size={16} /> },
  { key: "bank", label: "BANK", icon: <MdOutlineAccountBalance size={16} /> },
  { key: "review", label: "REVIEW", icon: <FiCheckSquare size={16} /> },
];


function StepBar({ active }) {
  return (
    <div className="w-full overflow-x-auto pb-1">
      <div className="flex items-start min-w-max mx-auto px-2 gap-0">
        {steps.map((step, i) => {
          const isActive = step.key === active;
          const isDone = i < steps.findIndex((s) => s.key === active);
          return (
            <div key={step.key} className="flex items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 transition-all
                    ${isActive ? "bg-teal-800 border-teal-800 text-white" : isDone ? "bg-teal-100 border-teal-300 text-teal-700" : "bg-white border-gray-200 text-gray-400"}`}
                >
                  {step.icon}
                </div>
                <span className={`text-[9px] sm:text-[10px] font-semibold mt-1.5 tracking-wide ${isActive ? "text-teal-800" : "text-gray-400"}`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-10 sm:w-14 lg:w-20 h-px mt-5 mx-1 ${isDone ? "bg-teal-300" : "bg-gray-200"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PropertyCard() {
  return (
    <div className="hidden xl:block absolute right-0 top-0 w-64 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative">
        <div className="w-full h-36 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
          <FiHome size={40} className="text-white opacity-60" />
        </div>
        <div className="absolute top-3 left-3 bg-amber-400 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <MdTrendingUp size={11} /> +12.4% ANNUALIZED
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-gray-900 text-sm">The Azure Penthouse</h4>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">Complete KYC to unlock fractional shares in this prime real estate asset.</p>
        <div className="mt-3">
          <div className="flex justify-between text-[10px] font-semibold text-gray-400 uppercase mb-1">
            <span>Funding Status</span>
            <span className="text-teal-700">75% Complete</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: "75%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityBadge() {
  return (
    <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4">
      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <FiCheck size={14} className="text-teal-700" />
      </div>
      <div>
        <p className="text-teal-700 font-semibold text-sm">Your data is secure and encrypted</p>
        <p className="text-gray-500 text-xs mt-0.5">We use AES-256 bank-level encryption for all KYC documents.</p>
      </div>
    </div>
  );
}

function BasicInfoForm() {
  const [form, setForm] = useState({ name: "", email: "", dob: "", address: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputCls = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200 transition-all";
  
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name (as per PAN Card)</label>
        <input className={inputCls} placeholder="Johnathan Doe" value={form.name} onChange={set("name")} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input type="email" className={inputCls} placeholder="john@sovereign.com" value={form.email} onChange={set("email")} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <input type="date" className={inputCls} value={form.dob} onChange={set("dob")} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address</label>
        <textarea
          className={`${inputCls} resize-none h-24`}
          placeholder="Enter your full permanent address"
          value={form.address}
          onChange={set("address")}
        />
      </div>
      <SecurityBadge />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
        <button onClick={() => {

        }} className="w-full sm:w-auto bg-teal-800 text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-teal-900 active:scale-95 transition-all">
          <NavLink to='/kyc-pan-verify'>
             Next Step
          </NavLink>
         
        </button>
        <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">Save and finish later</button>
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 xl:mr-72">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Basic Information</h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Please provide your personal details for verification. This information is required by law for high-value fractional investments.
        </p>
        <BasicInfoForm />
      </div>
      <PropertyCard />
    </div>
  );
}

function FooterBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-6">
      {[
        { icon: <BsShieldCheck size={13} />, label: "GDPR COMPLIANT" },
        { icon: <FiLock size={13} />, label: "SSL SECURE" },
        { icon: <FiShield size={13} />, label: "REGULATORY APPROVED" },
      ].map((b) => (
        <div key={b.label} className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold">
          {b.icon}
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}



export default function KYCVerification() {

  return (
    <div className="  bg-slate-50 font-sans">
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-800 mb-1">KYC Verification</h1>
          <p className="text-gray-500 text-sm sm:text-base">Sovereign Compliance Platform</p>
        </div>
        <div className="flex justify-center mb-8 sm:mb-10">
          <StepBar active="basic" />
        </div>
        <FormCard />
        <FooterBadges />
      </main>
    </div>
  );
}