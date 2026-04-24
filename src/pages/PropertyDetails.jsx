import { useState } from "react";
import { FiBell, FiMapPin, FiDownload, FiHeart, FiShare2, FiChevronDown, FiChevronUp, FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";
import { BsPersonCircle, BsBuilding, BsFileText, BsShieldCheck, BsDiagram3 } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineSquareFoot, MdOutlinePeople } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";

import { addToWatchlist } from "../slices/watchlistSlice";



const GALLERY = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=300&q=80",
  "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=80"
 ];

const DOCS = [
  { icon: <BsFileText size={18} />, name: "Investment Brochure", size: "PDF · 4.2 MB" },
  { icon: <BsShieldCheck size={18} />, name: "Legal Verification", size: "PDF · 1.8 MB" },
  { icon: <BsFileText size={18} />, name: "Due Diligence Report", size: "PDF · 12.5 MB" },
  { icon: <BsDiagram3 size={18} />, name: "Ownership Structure", size: "PDF · 2.8 MB" },
];

const FAQS = [
  { q: "What is fractional ownership?", a: "Fractional ownership allows multiple investors to own a percentage of a high-value property. Each share represents exactly 1% legal ownership in the underlying Special Purpose Vehicle (SPV) that owns this asset." },
  { q: "What does 1 share mean?", a: "One share equals 1% ownership in the property's SPV. You receive 1% of all rental income distributions and 1% of the final sale proceeds when the property is liquidated." },
  { q: "How do I exit my investment?", a: "You can exit by listing your shares on our secondary marketplace, or wait for the planned exit at the end of the holding period (5 years), at which point the property is sold and proceeds distributed." },
];

const RELATED = [
  { badge: "OFFICE", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80", name: "The Meridian Suites", loc: "London, Canary Wharf", roi: "12.2%", share: "$15k" },
  { badge: "RESIDENTIAL", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80", name: "Echo Garden Lofts", loc: "Singapore, District 10", roi: "9.5%", share: "$42k" },
  { badge: "HOSPITALITY", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", name: "Azure Bay Villas", loc: "Greece, Santorini", roi: "18.3%", share: "$85k" },
];



function Gallery({img}) {

  return (
    <div className="mb-8">
      <div className="relative rounded-2xl overflow-hidden mb-2">
        <img src={img} alt="main" className="w-full h-56 sm:h-72 lg:h-80 object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded-full">COMMERCIAL</span>
          <span className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-1 rounded-full">88% FUNDED</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {GALLERY.slice(1).map((img, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden">
            <img src={img} alt={`gallery-${i}`} className="w-full h-16 sm:h-20 object-cover" />
            {i === 3 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-xs font-bold">+12 Photos</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReturnsCalculator() {
  const [shares, setShares] = useState(2);
  const sharePrice = 25000;
  const monthlyRent = 0.081 / 12;
  const holdingYears = 5;
  const appreciation = 0.074;

  const totalInvest = shares * sharePrice;
  const monthlyIncome = totalInvest * monthlyRent;
  const exitValue = totalInvest * Math.pow(1 + appreciation, holdingYears);

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-900">Returns Calculator</span>
        <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded-full">Live Projection</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Select Shares</p>
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => setShares(Math.max(1, shares - 1))} className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <FiMinus size={14} />
            </button>
            <span className="text-2xl font-bold text-gray-900 w-8 text-center">{String(shares).padStart(2, "0")}</span>
            <button onClick={() => setShares(Math.min(100, shares + 1))} className="w-8 h-8 bg-emerald-700 text-white rounded-lg flex items-center justify-center hover:bg-emerald-800">
              <FiPlus size={14} />
            </button>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Ownership Percentage</p>
            <p className="text-sm font-bold text-gray-900">{shares}.0%</p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-1.5">
              <div className="bg-emerald-700 h-1 rounded-full" style={{ width: `${shares}%` }}></div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-[10px] text-gray-400">Total Investment</p>
            <p className="text-sm font-bold text-gray-900">${totalInvest.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-[10px] text-gray-400">Est. Monthly Income</p>
            <p className="text-sm font-bold text-emerald-700">${monthlyIncome.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-[10px] text-gray-400">Projected Exit (5Y)</p>
            <p className="text-sm font-bold text-gray-900">${Math.round(exitValue).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyCard({property}) {
  const dispatch = useDispatch();

  // const properties = useSelector((state) => state.property.properties);

  // console.log("pro" , properties,  );

   

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-5 lg:sticky lg:top-20">
      <h2 className="text-xl font-extrabold text-gray-900">{property.name}</h2>
      <div className="flex items-center gap-1 mt-1 mb-4">
        <HiOutlineLocationMarker size={13} className="text-gray-400" />
        <span className="text-xs text-gray-500">{property.loc}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Total Value</p>
          <p className="text-base font-bold text-gray-900">{property.totalValue}</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Share Price</p>
          <p className="text-base font-bold text-gray-900">{property.sharePrice}</p>
        </div>
        
      </div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">88% Funded</span>
        <span className="text-xs text-gray-400">12 / 100 Shares Left</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
        <div className="bg-emerald-700 h-1.5 rounded-full" style={{ width: "88%" }}></div>
      </div>
      <p className="text-[10px] text-gray-400 mb-4">Joined by 94 individual investors</p>
      <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl text-sm transition-colors mb-3">
        <NavLink to='/checkout'>
             Invest Now
        </NavLink>
       </button>



      <button 
      onClick={() => dispatch(addToWatchlist(property.id))}
      className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors mb-4">
        <FiHeart size={15} /> Save to Watchlist
      </button>
    
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  
  return (
    <section className="py-10">
      <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Investment Knowledge</h2>
      <div className="space-y-3">
        {FAQS.map((f, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
              <span className="text-sm font-medium text-gray-900">{f.q}</span>
              {open === i ? <FiChevronUp size={16} className="text-gray-400 shrink-0" /> : <FiChevronDown size={16} className="text-gray-400 shrink-0" />}
            </button>
            {open === i && <div className="px-5 pb-4 text-sm text-gray-500">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function RelatedCard({ p }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={p.img} alt={p.name} className="w-full h-32 object-cover" />
        <span className="absolute top-2 left-2 bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">{p.badge}</span>
      </div>
      <div className="p-3">
        <p className="text-sm font-bold text-gray-900">{p.name}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <HiOutlineLocationMarker size={11} className="text-gray-400" />
          <span className="text-[10px] text-gray-500">{p.loc}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-[9px] text-gray-400 uppercase">ROI</p>
            <p className="text-xs font-bold text-emerald-700">{p.roi}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 uppercase">Share</p>
            <p className="text-xs font-bold text-gray-900">{p.share}</p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function PropertydetailPage() {

  const properties = useSelector((state) => state.property.properties);
  const location = useLocation();
  const id = location.state?.id;
  const property = properties[id-1];
  console.log('id', property  )

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <a href="#" className="hover:text-gray-700">Home</a>
          <span>&rsaquo;</span>
          <a href="#" className="hover:text-gray-700">Properties</a>
          <span>&rsaquo;</span>
          <span className="text-gray-900 font-medium">The Azure Heights</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <Gallery img={property.img} />

            <section className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Property Overview</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">The Azure Heights represents a 
                cornerstone investment in the heart of Dubai's Marina District. This premium commercial asset spans the upper 3 floors of a Grade-A skyscraper, offering unparalleled views and high-yield tenant stability. The property is currently tenanted by three Fortune 500 regional headquarters on long-term 5-year leases.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <MdOutlineSquareFoot size={18} className="text-gray-400 shrink-0" />
                  <span className="text-xs text-gray-600">12,450 Sq Ft Total Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker size={18} className="text-gray-400 shrink-0" />
                  <span className="text-xs text-gray-600">{property.loc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlinePeople size={18} className="text-gray-400 shrink-0" />
                  <span className="text-xs text-gray-600">3 Triple-Net Anchor Tenants</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiBuilding2Line size={18} className="text-gray-400 shrink-0" />
                  <span className="text-xs text-gray-600">Grade-A Commercial Tower</span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Investment Performance</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                  { label: "Total Asset Value", value: "$2,500,000" },
                  { label: "Price Per Share", value: "$25,000" },
                 
                  { label: "Holding Period", value: "5 Years" },
                  { label: "Appreciation Est.", value: "7.4% / yr" },
                  { label: "Locking period", value: property.locking_period },

                ].map(item => (
                  <div key={item.label}>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className={`text-lg font-bold mt-1 ${item.green ? "text-emerald-700" : "text-gray-900"}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mb-6">
              <ReturnsCalculator />
            </div>

            <section className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Location</h2>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <HiOutlineLocationMarker size={13} />
                  Marina District, Dubai, UAE
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl h-40 sm:h-52 flex items-center justify-center mb-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13757.354064198062!2d73.8536679!3d18.4719759!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1776857246711!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
             </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Metro Access", desc: "2 mins walking distance" },
                  { name: "Dubai Intl Airport", desc: "25 mins drive" },
                  { name: "The Palm Jumeirah", desc: "12 mins drive" },
                ].map(loc => (
                  <div key={loc.name} className="text-center">
                    <p className="text-xs font-semibold text-gray-800">{loc.name}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Due Diligence</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCS.map(doc => (
                  <div key={doc.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500">{doc.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">{doc.name}</p>
                        <p className="text-[10px] text-gray-400">{doc.size}</p>
                      </div>
                    </div>
                    <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
                      <FiDownload size={14} className="text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <FAQSection />

            <section className="py-8">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Curated Opportunities</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Hand-picked properties similar to your current view.</p>
                </div>
                <a href="#" className="flex items-center gap-1 text-xs text-emerald-700 font-semibold hover:underline">View Portfolio <FiArrowRight size={12} /></a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {RELATED.map(p => <RelatedCard key={p.name} p={p} />)}
              </div>
            </section>
          </div>

          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <StickyCard  property={property}/>
          </div>

          
        </div>
      </div>
    </div>
  );
}