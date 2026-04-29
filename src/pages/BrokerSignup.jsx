import React from 'react'
import { FaPhone, FaIdCard, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import { useState, useRef } from "react";
import { FaUser, FaStar, FaBolt, FaUserTie, FaMoneyBill, FaTh } from "react-icons/fa";
import { FiUploadCloud, FiFileText } from "react-icons/fi";

const benefits = [
  { icon: FaStar, title: "Premium Property Listings", desc: "Gain early access to institutional-grade commercial and residential assets." },
  { icon: FaBolt, title: "Faster Lead Generation", desc: "Utilize our AI-driven marketing stack to close deals 3x faster." },
  { icon: FaUserTie, title: "Dedicated RM", desc: "Personal relationship manager to assist with high-ticket advisory." },
  { icon: FaMoneyBill, title: "Higher Commissions", desc: "Tiered incentives that reward volume and consistency." },
  { icon: FaTh, title: "Real-time Dashboard", desc: "Track your earnings, clients, and assets with surgical precision." },
];

export default function BrokerSignup() {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [confirm1, setConfirm1] = useState(true);
  const [confirm2, setConfirm2] = useState(true);
  const fileRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <span className="text-[#1a5c4f] font-bold text-lg">Sovereign Partners</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <button className="hover:text-[#1a5c4f]">Experience</button>
          <button className="hover:text-[#1a5c4f]">Portfolio</button>
          <button className="hover:text-[#1a5c4f]">Capital</button>
          <button className="hover:text-[#1a5c4f]">Support</button>
          <button className="bg-[#1a5c4f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#154d43] transition-colors">
            Partner Login
          </button>
        </div>
        <button className="md:hidden bg-[#1a5c4f] text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
          Partner Login
        </button>
      </nav>

      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex-1 px-6 sm:px-10 lg:px-14 py-10 max-w-full lg:max-w-[65%]">
          <p className="text-xs font-semibold text-[#1a5c4f] tracking-widest uppercase mb-1">Onboarding</p>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Become a Partner</h1>
            <span className="text-sm text-gray-500 font-medium">Step 1 of 2</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-10">
            <div className="bg-[#1a5c4f] h-1.5 rounded-full w-1/2" />
          </div>

          <div className="flex items-center gap-2 mb-6">
            <FaUser className="text-[#1a5c4f] text-base" />
            <h2 className="text-lg font-bold text-gray-800">Personal Details</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name*</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f] border border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number*</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f] border border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address*</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f] border border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">PAN Number*</label>
              <input
                type="text"
                placeholder="ABCDE1234F"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f] border border-transparent"
              />
            </div>
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">RERA Number (Optional)</label>
            <input
              type="text"
              placeholder="PRM/KA/RERA/..."
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f] border border-transparent"
            />
          </div>

          <div className="flex items-center gap-2 mb-5">
            <FiFileText className="text-[#1a5c4f] text-base" />
            <h2 className="text-lg font-bold text-gray-800">Address Proof Upload</h2>
          </div>

          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors mb-6 ${dragOver ? "border-[#1a5c4f] bg-green-50" : "border-gray-300 bg-white"}`}
          >
            <FiUploadCloud className="text-[#1a5c4f] text-4xl mb-3" />
            <p className="font-semibold text-gray-800 mb-1">
              {fileName ? fileName : "Drag and drop file here"}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Aadhaar, Driving License, Utility Bill, or Passport (PDF, JPG, PNG)
            </p>
            <button
              onClick={() => fileRef.current.click()}
              className="border border-[#1a5c4f] text-[#1a5c4f] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
            >
              Browse Files
            </button>
            <input ref={fileRef} type="file" className="hidden" onChange={handleFile} />
          </div>

          <div className="bg-gray-100 rounded-xl px-5 py-4 mb-8 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={confirm1}
                onChange={() => setConfirm1(!confirm1)}
                className="mt-0.5 w-4 h-4 accent-[#1a5c4f] rounded shrink-0"
              />
              <span className="text-sm text-gray-700">
                I confirm that all the information provided above is accurate and matches my legal documents.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={confirm2}
                onChange={() => setConfirm2(!confirm2)}
                className="mt-0.5 w-4 h-4 accent-[#1a5c4f] rounded shrink-0"
              />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <button className="text-[#1a5c4f] font-semibold underline">Terms of Service</button>{" "}
                and{" "}
                <button className="text-[#1a5c4f] font-semibold underline">Privacy Policy</button>.
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:flex-1 bg-[#1a5c4f] hover:bg-[#154d43] text-white font-semibold py-3.5 rounded-xl text-sm transition-colors">
              Submit Application
            </button>
            <button className="w-full sm:w-auto text-gray-700 font-semibold text-sm hover:text-gray-900 px-6">
              Save Draft
            </button>
          </div>
        </div>

        <div className="bg-[#1a5c4f] text-white w-full lg:w-[35%] p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Empowering Sovereignty in Real Estate.
              </h2>
              <p className="text-green-200 text-sm leading-relaxed">
                Join the exclusive network of partners driving the fractional ownership revolution.
              </p>
            </div>

            <p className="text-xs font-bold text-yellow-400 tracking-widest uppercase mb-5">
              Partner Benefits
            </p>

            <div className="space-y-5">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="text-green-300 text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-green-200 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <p className="text-xs font-semibold text-green-200">Authorized Platform</p>
            <p className="text-xs text-green-300 mb-3">ISO 27001 Certified Security</p>
            <div className="flex items-center gap-1">
              {["bg-amber-400", "bg-rose-400", "bg-sky-400", "bg-purple-400"].map((c, i) => (
                <div key={i} className={`w-7 h-7 rounded-full border-2 border-[#1a5c4f] ${c}`} />
              ))}
              <div className="w-7 h-7 rounded-full border-2 border-[#1a5c4f] bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                +5k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}