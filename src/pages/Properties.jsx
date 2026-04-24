import { useEffect, useState } from "react";
import {
  FiBell,
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiBarChart2,
  FiBookmark,
  FiArrowRight,
  FiMail,
  FiGlobe,
  FiShare2,
} from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";

const NAV_LINKS = ["Portfolio", "Marketplace", "Insights", "Governance"];

const LOCATIONS = ["London, UK", "New York, USA", "Dubai, UAE"];
const FUNDING_STATUS = ["All", "Fully Funded", "In Progress"];

const BADGE1_COLORS = {
  HOT: "bg-emerald-700",
  NEW: "bg-teal-600",
  STABLE: "bg-blue-700",
  PREMIUM: "bg-purple-700",
  RESIDENTIAL: "bg-orange-600",
};

function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
      <a href="#" className="hover:text-gray-700">
        Home
      </a>
      <span className="text-gray-400">&rsaquo;</span>
      <span className="text-gray-900 font-medium">Properties</span>
    </div>
  );
}

function FilterPanel({
  locations,
  setLocations,
  budgetRange,
  setBudgetRange,
  roiRange,
  setRoiRange,
  fundingStatus,
  setFundingStatus,
  onApply,
  onReset,
}) {
  const toggleLocation = (loc) => {
    setLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };
  const toggleFunding = (s) => setFundingStatus(s);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="font-semibold text-gray-900 text-base">Filters</span>
        <button
          onClick={onReset}
          className="text-xs text-emerald-700 font-medium hover:underline"
        >
          Reset Filters
        </button>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
          Location
        </p>
        {LOCATIONS.map((loc) => (
          <label
            key={loc}
            className="flex items-center gap-2 mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={locations.includes(loc)}
              onChange={() => toggleLocation(loc)}
              className="w-4 h-4 accent-emerald-700 rounded"
            />
            <span className="text-sm text-gray-700">{loc}</span>
          </label>
        ))}
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
          Property Type
        </p>
        <div className="relative">
          <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 appearance-none bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-600">
            <option>Commercial Office</option>
            <option>Residential</option>
            <option>Retail</option>
            <option>Industrial</option>
          </select>
          <FiChevronDown
            className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
            size={15}
          />
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Budget Range
          </p>
          <span className="text-xs text-gray-500">$500k+</span>
        </div>
        <input
          type="range"
          min={100000}
          max={10000000}
          step={100000}
          value={budgetRange}
          onChange={(e) => setBudgetRange(Number(e.target.value))}
          className="w-full accent-emerald-700 h-1.5 rounded-full"
        />
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-gray-400">$100K</span>
          <span className="text-[10px] text-gray-400">$10M</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
          Funding Status
        </p>
        <div className="flex flex-wrap gap-2">
          {FUNDING_STATUS.map((s) => (
            <button
              key={s}
              onClick={() => toggleFunding(s)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-colors ${
                fundingStatus === s
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "border-gray-200 text-gray-600 hover:border-emerald-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onApply}
        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
}

function PropertyCard({ p }) {
  const [saved, setSaved] = useState(false);

  
  // const properties = useSelector((state) => state.property.properties);
  console.log('propert', p.id);
  



  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-40 sm:h-44 object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {p.badge1 && (
            <span
              className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${
                BADGE1_COLORS[p.badge1] || "bg-emerald-700"
              }`}
            >
              {p.badge1}
            </span>
          )}
          {p.badge2 && (
            <span className="text-[10px] font-bold text-gray-700 bg-white px-2 py-0.5 rounded-full border border-gray-200">
              {p.badge2}
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm sm:text-base">
          {p.name}
        </h3>
        <div className="flex items-center gap-1 mt-0.5">
          <HiOutlineLocationMarker size={12} className="text-gray-400" />
          <span className="text-xs text-gray-500">{p.loc}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
              Locking Period
            </p>
            <p className="text-sm font-bold text-gray-900 mt-1">
              {p.locking_period}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
              TOTAL VALUE
            </p>
            <p className="text-sm font-bold text-gray-900 mt-1">
              {p.totalValue}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                SHARE PRICE
              </p>
              <p className="text-base font-extrabold text-gray-900">
                {p.sharePrice}{" "}
                <span className="text-xs text-gray-400 font-normal">/1%</span>
              </p>
            </div>
            <span className="text-xs text-gray-500 font-medium">
              {p.funded}% Funded
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div
              className="bg-emerald-700 h-1.5 rounded-full transition-all"
              style={{ width: `${p.funded}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
            <NavLink 
              to="/property-details" 
              state={{ id: p.id }}
            >
              View Details
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PropertyPage() {
  const [locations, setLocations] = useState(["London, UK"]);
  const [budgetRange, setBudgetRange] = useState(5000000);
  const [roiRange, setRoiRange] = useState(11);
  const [fundingStatus, setFundingStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Newest Listed");
  const [currentPage, setCurrentPage] = useState(1);
  const [load, setLoad] = useState(6);
 
  const [PROPERTIES, SETPROPERTIES] = useState([
    {
      id: 1,
      badge1: "HOT",
      badge2: "OFFICE",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80",
      name: "Azure Corporate Plaza",
      loc: "London, UK",
      locking_period: "+125.4%",
      roi: "+12.4%",
      totalValue: "$14.2M",
      sharePrice: "$1,420",
      funded: 72,
      status: "active",
    },
    {
      id: 2,
      badge1: "NEW",
      badge2: "RESIDENTIAL",
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80",
      name: "Veridian Luxury Suites",
      loc: "London, UK",
      locking_period: "+125.4%",
      roi: "+6.8%",
      totalValue: "$28.5M",
      sharePrice: "$2,850",
      funded: 15,
      status: "active",
    },
    {
      id: 3,
      badge1: "HOT",
      badge2: "RETAIL",
      img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=500&q=80",
      name: "Summit Retail Hub",
      loc: "London, UK",
      locking_period: "+125.4%",
      roi: "+15.2%",
      totalValue: "$52.0M",
      sharePrice: "$5,200",
      funded: 94,
      status: "funded",
    },
    {
      id: 4,
      badge1: "RESIDENTIAL",
      badge2: null,
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80",
      name: "Artisan SOHO Lofts",
      loc: "London, UK",
      locking_period: "+125.4%",
      roi: "+5.2%",
      totalValue: "$8.8M",
      sharePrice: "$880",
      funded: 42,
      status: "active",
    },
    {
      id: 5,
      badge1: "STABLE",
      badge2: "INDUSTRIAL",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80",
      name: "North-West Logistics",
      loc: "London, UK",
      locking_period: "+125.4%",
      roi: "+11.1%",
      totalValue: "$11.5M",
      sharePrice: "$1,150",
      funded: 58,
      status: "active",
    },
    {
      id: 6,
      badge1: "PREMIUM",
      badge2: "MIXED USE",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=80",
      name: "The Heritage Arcade",
      loc: "Paris, France",
      locking_period: "+125.4%",
      roi: "+9.4%",
      totalValue: "$19.1M",
      sharePrice: "$1,910",
      funded: 88,
      status: "active",
    },
  ]);

  const handleReset = () => {
    setLocations([""]);
    setBudgetRange(0);
    setRoiRange(0);
    setFundingStatus("All");
  };

  const filtered = PROPERTIES.filter((p) => {
    if (
      search &&
      !p.name.toLowerCase().includes(search.toLowerCase()) &&
      !p.loc.toLowerCase().includes(search.toLowerCase())
    )
      return false;

    const matchedLocation = locations.find(
      (l) => p.loc.toLowerCase().trim() === l.toLowerCase().trim()
    );
    return matchedLocation;
  });

  const visibleProperties = filtered.slice(0, load);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log("Latitude:", position.coords.latitude);
        // console.log("Longitude:", position.coords.longitude);
      },
      (error) => {
        if (error.code === 1) {
          // console.log("User denied location permission");
        } else {
          // console.log("Error getting location:", error.message);
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-green-50 font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Explore Investment
              <br />
              Opportunities
            </h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-lg">
              Browse premium properties and invest in shares of high-yield real
              estate assets curated for institutional-grade portfolios.
            </p>
          </div>
          <div className="relative w-full sm:w-72 lg:w-80 shrink-0">
            <FiSearch
              className="absolute left-3 top-3 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by city, asset or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-56 xl:w-64 shrink-0">
            <FilterPanel
              locations={locations}
              setLocations={setLocations}
              budgetRange={budgetRange}
              setBudgetRange={setBudgetRange}
              roiRange={roiRange}
              setRoiRange={setRoiRange}
              fundingStatus={fundingStatus}
              setFundingStatus={setFundingStatus}
              onApply={() => {}}
              onReset={handleReset}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {visibleProperties.length} properties
                </span>{" "}
                in Marketplace
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 hidden sm:inline">
                  Sort by:
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm font-medium text-gray-900 border border-gray-200 rounded-lg px-3 py-1.5 appearance-none bg-white pr-7 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  >
                    <option>Newest Listed</option>
                    <option>Highest ROI</option>
                    <option>Lowest Price</option>
                    <option>Most Funded</option>
                  </select>
                  <FiChevronDown
                    className="absolute right-2 top-2 text-gray-400 pointer-events-none"
                    size={14}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {visibleProperties.map((p) => (
                <PropertyCard key={p.name} p={p} />
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  setLoad((prev) => prev + 3);
                }}
                className="border border-gray-200 text-gray-700 text-sm font-medium px-8 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
              >
                Load More Properties
              </button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, "...", 8].map((p, i) => (
                  <button
                    key={i}
                    onClick={() => typeof p === "number" && setCurrentPage(p)}
                    className={`w-8 h-8 text-sm rounded-full font-medium transition-colors ${
                      p === currentPage
                        ? "bg-emerald-700 text-white"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
