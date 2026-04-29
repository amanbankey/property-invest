import React from 'react'
import { FaPhone, FaIdCard, FaMapMarkerAlt, FaLock } from "react-icons/fa";

const BrokerSignup = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Become a Broker
        </h1>
        <p className="text-gray-500 text-base sm:text-lg">
          Start your journey with a modern platform designed for growth and opportunities.
        </p>
      </div>

      <div className="w-full bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8">
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-2 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
            <FaIdCard className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="PAN Number"
              className="w-full px-2 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-2 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-2 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white rounded-lg py-3 hover:bg-emerald-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BrokerSignup