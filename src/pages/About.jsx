import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const About = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center lg:text-left mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-gray-900 leading-tight">
          About <span className="text-emerald-500">EquiShare</span>
        </h1>
        <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
          We’re building the future of real estate investing—transparent, accessible, and powered by ownership, one share at a time.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Mission</h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            We believe everyone should be able to own a piece of premium real estate without the burden of high capital, paperwork, or middlemen.
          </p>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed">
            By tokenizing real estate into fractional shares, we make high-yield property investment open to all—from first‑time investors to seasoned professionals.
          </p>
        </div>

        <div className="flex-1 relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80"
            alt="Our mission - Real estate investment"
            className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2  gap-12 items-center mb-16">

      <div className="flex-1 order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80"
            alt="Our vision - Global real estate"
            className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Vision</h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            We envision a world where real estate ownership is no longer limited to the wealthy few, but democratized across communities, borders, and generations.
          </p>
          <p className="text-gray-500 text-base sm:text-lg mt-4 leading-relaxed">
            With transparent reporting, digital verification, and automated distributions, we aim to become the trusted platform for fractional real estate worldwide.
          </p>
        </div>
     
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency First</h3>
            <p className="text-gray-500 text-sm">
              Every property, every transaction, and every distribution is clearly documented and shared with our investors.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Ownership</h3>
            <p className="text-gray-500 text-sm">
              A single share is enough to become a co‑owner. No more gatekeeping by wealth or geography.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Driven</h3>
            <p className="text-gray-500 text-sm">
              Blockchain‑inspired tracking, smart monitoring, and automated payouts simplify property ownership.
            </p>
          </div>
        </div>
      </div>

      {/* Stats / Impact */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">By the Numbers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <p className="text-3xl font-bold text-gray-900">$240M+</p>
            <p className="text-xs text-gray-500 mt-1">Assets Managed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">12.4%</p>
            <p className="text-xs text-gray-500 mt-1">Avg. Yield</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">18K+</p>
            <p className="text-xs text-gray-500 mt-1">Investors</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">45+</p>
            <p className="text-xs text-gray-500 mt-1">Properties</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Join the Future of Real Estate
        </h2>
        <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-3xl mx-auto lg:mx-0">
          Become a partner in high‑yield properties with as little as one share. Start exploring, investing, and growing today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <NavLink
            to="/property"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3 rounded-lg transition-colors text-sm"
          >
            Explore Properties
          </NavLink>
          <NavLink
            to="/signup"
            className="inline-block border border-gray-300 hover:border-emerald-400 text-gray-700 font-semibold px-7 py-3 rounded-lg transition-colors text-sm bg-green-50"
          >
            Become a Partner
          </NavLink>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About






