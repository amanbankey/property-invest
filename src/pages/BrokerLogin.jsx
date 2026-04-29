
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaChartBar, FaDollarSign, FaStar, FaTh } from "react-icons/fa";

const features = [
  { icon: FaChartBar, title: "Manage property leads", desc: "Advanced CRM tools for seamless conversion." },
  { icon: FaDollarSign, title: "Track commissions", desc: "Instant visibility into your earnings and payouts." },
  { icon: FaStar, title: "Access premium listings", desc: "Curated high-yield fractional property portfolios." },
  { icon: FaTh, title: "Real-time sales dashboard", desc: "Live data analytics to drive your business growth." },
];

export default function BrokerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl">

        <div className="bg-[#1a5c4f] text-white flex flex-col justify-between p-8 lg:p-12 w-full lg:w-[52%]">
          <div>
            <p className="text-sm font-semibold tracking-wide mb-6 lg:mb-10">Sovereign Partners</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
              Architecting the<br />future of real estate<br />capital.
            </h1>
            <p className="text-sm text-green-100 mb-8 lg:mb-12 max-w-sm">
              Join our elite network of broker partners and access the most exclusive fractional assets in the market.
            </p>
            <div className="space-y-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 text-green-300 text-lg shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-green-200 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-10 lg:mt-0">
            <div className="flex -space-x-2">
              {["bg-amber-400", "bg-rose-400", "bg-sky-400"].map((c, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#1a5c4f] ${c}`} />
              ))}
            </div>
            <p className="text-xs text-green-100">Joined by 2,400+ top brokers this month</p>
          </div>
        </div>

        <div className="bg-gray-50 flex items-center justify-center w-full lg:w-[48%] p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Partner Login</h2>
            <p className="text-sm text-gray-500 mb-7">Access your broker partner dashboard.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 tracking-widest mb-1.5 uppercase">
                  Mobile Number / Email Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your credentials"
                  className="w-full bg-gray-100 border border-transparent rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 tracking-widest mb-1.5 uppercase">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="••••••••"
                    className="w-full bg-gray-100 border border-transparent rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a5c4f] pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="w-4 h-4 accent-[#1a5c4f] rounded"
                  />
                  <span className="text-sm text-gray-600">Remember Me</span>
                </label>
                <button className="text-sm font-semibold text-[#1a5c4f] hover:underline">
                  Forgot Password?
                </button>
              </div>

              <button className="w-full bg-[#1a5c4f] hover:bg-[#154d43] text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                Login
              </button>

              <button className="w-full text-sm font-semibold text-[#1a5c4f] hover:underline py-1">
                Login with OTP
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 uppercase tracking-widest">or continue with</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <FcGoogle size={18} />
                  Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <FaApple size={18} className="text-gray-800" />
                  Apple
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <FiLock size={12} />
                Your information is securely encrypted
              </div>

              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <button className="font-semibold text-[#1a5c4f] hover:underline">
                  Become a Partner
                </button>
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-8 text-xs text-gray-400">
              <button className="hover:text-gray-600 uppercase tracking-widest">Privacy Policy</button>
              <button className="hover:text-gray-600 uppercase tracking-widest">Terms of Service</button>
              <button className="hover:text-gray-600 uppercase tracking-widest">Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
