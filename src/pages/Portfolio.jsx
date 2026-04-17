
import { useState } from "react";
import { FiBell, FiMapPin, FiDownload, FiChevronUp, FiChevronDown, FiTrendingUp, FiPieChart, FiDollarSign, FiBarChart2, FiFolder, FiFileText, FiCheckCircle, FiGrid, FiLogOut } from "react-icons/fi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { BsPersonCircle, BsBuilding } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const tabs = ["Active Investments", "Completed Investments", "Watchlist", "Payment History", "Return History", "Documents", "Support / Exit Request"];


function PageHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
      <div>
       
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">My Portfolio</h1>
         
      
        <p className="text-gray-500 text-sm mt-1">Track your investments and returns across <span className="font-medium text-gray-700">premium</span> global assets.</p>
      </div>

      <button className="self-start sm:self-auto bg-teal-800 text-white font-semibold text-sm 
      
      px-5 py-3 rounded-xl hover:bg-teal-900 active:scale-95 transition-all whitespace-nowrap">
       <NavLink to='/property'  >
          Explore More Properties
        </NavLink>
        
      </button>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { icon: <FiGrid size={16} />, label: "TOTAL INVESTED", value: "$4,250,000", sub: <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full mt-1 inline-block">GROWTH +12.4%</span> },
    { icon: <FiTrendingUp size={16} />, label: "CURRENT VALUE", value: "$4,892,150" },
    { icon: <FiPieChart size={16} />, label: "SHARES OWNED", value: "1,200" },
    { icon: <FiBarChart2 size={16} />, label: "EXPECTED RETURNS", value: "14.8%" },
    { icon: <FiDollarSign size={16} />, label: "RENTAL INCOME", value: <span className="text-teal-700">$18,420</span> },
  ];
  return (
    <div className="bg-green-50 border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col">
          <div className="flex items-center gap-1.5 text-teal-700 mb-1">{s.icon}<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{s.label}</span></div>
          <p className="text-xl sm:text-2xl font-extrabold text-gray-900">{s.value}</p>
          {s.sub && s.sub}
        </div>
      ))}
    </div>
  );
}

function TabBar({ active, setActive }) {
  return (
    <div className="w-full overflow-x-auto mb-6">
      <div className="flex gap-0 min-w-max border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${active === tab ? "text-gray-900 border-b-2 border-teal-700" : "text-gray-400 hover:text-gray-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

function ReturnHistory() {
  const rows = [
    { date: "Oct 12, 2024", type: "Monthly Rental Distribution", amount: "$1,240.00" },
    { date: "Sep 12, 2024", type: "Monthly Rental Distribution", amount: "$1,240.00" },
    { date: "Aug 12, 2024", type: "Quarterly Valuation Gain", amount: "$8,450.00" },
  ];
  return (
    <div className="mt-5 pt-5 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Ownership Highlight</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-4 border-teal-600 border-r-gray-100 flex items-center justify-center">
                <span className="text-xs font-bold text-teal-700">50%</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">50 Shares</p>
              <p className="text-gray-400 text-xs">Full fractional ownership secured</p>
            </div>
          </div>
          {[["Profit / Loss", "+$170,000", "text-green-600"], ["Rental Yield", "4.2%", "text-gray-900"], ["Income Received", "$12,400", "text-gray-900"]].map(([k, v, cls]) => (
            <div key={k} className="flex justify-between py-2 border-b border-gray-50 text-sm">
              <span className="text-gray-500">{k}</span>
              <span className={`font-semibold ${cls}`}>{v}</span>
            </div>
          ))}
        </div>
        <div className="lg:col-span-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Return History</p>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm min-w-[400px]">
              <thead>
                <tr className="text-[10px] text-gray-400 uppercase tracking-wider">
                  <th className="text-left pb-2 font-semibold">Date</th>
                  <th className="text-left pb-2 font-semibold">Return Type</th>
                  <th className="text-right pb-2 font-semibold">Amount</th>
                  <th className="text-right pb-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-gray-50">
                    <td className="py-3 text-gray-500">{r.date}</td>
                    <td className="py-3 text-gray-700">{r.type}</td>
                    <td className="py-3 text-right text-gray-900 font-medium">{r.amount}</td>
                    <td className="py-3 text-right">
                      <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">PROCESSED</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestmentCard({ property, expanded, onToggle }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm mb-4 overflow-hidden">
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-sky-400 to-teal-600 flex items-center justify-center flex-shrink-0">
              <BsBuilding size={20} className="text-white opacity-80" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{property.name}</h3>
              <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><FiMapPin size={10} />{property.location}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 flex-1">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Shares Owned</p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">{property.shares}</p>
              <p className="text-[10px] text-gray-400">{property.ownership}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Invested</p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">{property.invested}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Current Value</p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">{property.value}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {property.roi && (
              <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">{property.roi}</span>
            )}
            {property.expandable ? (
              <button onClick={onToggle} className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all">
                {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
              </button>
            ) : (
              <button className="border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                View Details
              </button>
            )}
          </div>
        </div>
      </div>
      {expanded && property.expandable && (
        <div className="px-4 sm:px-5 pb-5 bg-white border-t border-gray-50">
          <ReturnHistory />
        </div>
      )}
    </div>
  );
}

function ActiveInvestments() {
  const [expanded, setExpanded] = useState(0);
  const properties = [
    { name: "The Azure Heights", location: "Dubai, UAE", shares: "50", ownership: "(50% Own.)", invested: "$1,250,000", value: "$1,420,000", roi: "+15.7% ROI", expandable: true },
    { name: "The Alpine Retreat", location: "St. Moritz, Switzerland", shares: "25", ownership: "(25% Own.)", invested: "$850,000", value: "$910,000", expandable: false },
    { name: "Green Valley Estate", location: "Tuscany, Italy", shares: "10", ownership: "(10% Own.)", invested: "$420,000", value: "$445,000", expandable: false },
  ];
  return (
    <div>
      {properties.map((p, i) => (
        <InvestmentCard key={p.name} property={p} expanded={expanded === i && p.expandable} onToggle={() => setExpanded(expanded === i ? -1 : i)} />
      ))}
    </div>
  );
}

function Documents() {
  const docs = [
    { icon: <FiFileText size={16} />, name: "Investment Agreement", meta: "PDF • 2.4MB" },
    { icon: <FiCheckCircle size={16} />, name: "Ownership Certificate", meta: "PDF • 1.1MB" },
    { icon: <MdOutlineAccountBalance size={16} />, name: "Tax Statement 2023", meta: "PDF • 0.8MB" },
  ];
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <FiFolder size={14} className="text-gray-400" />
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Documents</p>
      </div>
      <div className="space-y-2">
        {docs.map((d) => (
          <div key={d.name} className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="text-teal-700">{d.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{d.name}</p>
                <p className="text-xs text-gray-400">{d.meta}</p>
              </div>
            </div>
            <FiDownload size={16} className="text-gray-400 cursor-pointer hover:text-teal-700 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExitPortfolio() {
  const [asset, setAsset] = useState("The Azure Heights");
  return (
    <div className="bg-teal-800 rounded-2xl p-5 text-white">
      <div className="flex items-center gap-2 mb-3">
        <FiLogOut size={15} className="text-teal-300" />
        <p className="text-[11px] font-bold tracking-widest uppercase text-teal-300">Exit Portfolio</p>
      </div>
      <p className="text-xs text-teal-200 leading-relaxed mb-4">
        Direct selling is not allowed on the public marketplace. Exit requests are handled manually by our institutional support team.
      </p>
      <div className="mb-3">
        <p className="text-[10px] font-semibold text-teal-300 uppercase tracking-wide mb-1.5">Select Asset</p>
        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          className="w-full bg-teal-700 text-white text-sm rounded-lg px-3 py-2.5 outline-none border border-teal-600 cursor-pointer"
        >
          <option>The Azure Heights</option>
          <option>The Alpine Retreat</option>
          <option>Green Valley Estate</option>
        </select>
      </div>
      <button className="w-full bg-amber-400 text-gray-900 font-bold text-sm py-3 rounded-xl hover:bg-amber-500 active:scale-95 transition-all">
        Submit Exit Request
      </button>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-full lg:w-64 xl:w-72 flex-shrink-0 space-y-4">
      <Documents />
      <ExitPortfolio />
    </div>
  );
}
 




export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Active Investments");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader />
        <StatsBar />
        <TabBar active={activeTab} setActive={setActiveTab} />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            {activeTab === "Active Investments" && <ActiveInvestments />}
            {activeTab !== "Active Investments" && (
              <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center text-gray-400 text-sm">
                No data for {activeTab} yet.
              </div>
            )}
          </div>
         
        </div> <Sidebar />
      </main>
     
    </div>
  );
}