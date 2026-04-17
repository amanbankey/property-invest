// import { useState } from "react";
// import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineCheckCircle } from "react-icons/hi";
// import { HiOutlineSquares2X2, HiBriefcase, HiOutlineUsers, HiOutlineBanknotes, HiOutlineDocumentText, HiOutlineQuestionMarkCircle, HiArrowRightOnRectangle, HiOutlineShare, HiOutlineClipboardDocument, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
// import { RiCopperCoinLine } from "react-icons/ri";

// const navItems = [
//   { icon: HiOutlineSquares2X2, label: "Overview", active: true },
//   { icon: HiBriefcase, label: "Portfolio" },
//   { icon: HiOutlineUsers, label: "Investors" },
//   { icon: HiOutlineBanknotes, label: "Revenue" },
//   { icon: HiOutlineDocumentText, label: "Documents" },
// ];

// const statCards = [
//   { icon: HiOutlineUserGroup, label: "Total Referrals", value: "1,284", color: "text-teal-700" },
//   { icon: HiOutlineShieldCheck, label: "Total Converted", value: "432", color: "text-teal-700" },
//   { icon: HiOutlineChartBar, label: "Total Investment", value: "$2.4M", color: "text-teal-700" },
//   { icon: RiCopperCoinLine, label: "Total Earnings", value: "$86,400", color: "text-yellow-600" },
//   { icon: HiOutlineCalendar, label: "Pending Comm.", value: "$12,150", color: "text-red-500" },
//   { icon: HiOutlineCheckCircle, label: "Paid Comm.", value: "$74,250", color: "text-teal-700" },
// ];

// const recentInvestors = [
//   { name: "Jonathan Sterling", contact: "+91  XXXXX1234", property: "Azure Bay Penthouse", amount: "$125,000", date: "Oct 12, 2023", status: "Completed" },
//   { name: "Amara Okafor", contact: "+91  XXXXX5678", property: "Golden Valley Estates", amount: "$45,000", date: "Oct 08, 2023", status: "In Process" },
//   { name: "Kenji Tanaka", contact: "+91  XXXXX9812", property: "The Sovereign Tower", amount: "$250,000", date: "Sep 28, 2023", status: "Completed" },
// ];

// const commissionDetails = [
//   { property: "Azure Bay Penthouse", investor: "Jonathan S.", commission: "$6,250", status: "Paid" },
//   { property: "The Sovereign Tower", investor: "Kenji T.", commission: "$12,500", status: "Pending" },
// ];

// const opportunities = [
//   { tag: "PREMIUM ASSET", tagColor: "bg-teal-700", roi: "8.4% Est. ROI", roiColor: "bg-teal-700", name: "Elysium Gardens", location: "Beverly Hills, California", price: "$2,500", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" },
//   { tag: "NEWLY ADDED", tagColor: "bg-teal-500", roi: "12.2% Est. ROI", roiColor: "bg-teal-500", name: "Indigo Reef Residences", location: "Malibu Coastline", price: "$10,000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80" },
//   { tag: "COMMERCIAL", tagColor: "bg-slate-700", roi: "9.8% Est. Yield", roiColor: "bg-slate-700", name: "Metropolitan Plaza", location: "Downtown Business District", price: "$5,000", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80" },
// ];

// const chartPoints = [
//   { x: 0, y: 85 }, { x: 1, y: 80 }, { x: 2, y: 75 }, { x: 3, y: 60 },
//   { x: 4, y: 45 }, { x: 5, y: 35 }, { x: 6, y: 30 }, { x: 7, y: 20 },
//   { x: 8, y: 25 }, { x: 9, y: 30 }, { x: 10, y: 20 }, { x: 11, y: 10 },
// ];

// function LineChart() {
//   const W = 560, H = 160, pad = 10;
//   const maxY = 100;
//   const pts = chartPoints.map((p, i) => ({
//     cx: pad + (i / (chartPoints.length - 1)) * (W - pad * 2),
//     cy: pad + (p.y / maxY) * (H - pad * 2),
//   }));
//   const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.cx},${p.cy}`).join(" ");
//   const area = path + ` L${pts[pts.length - 1].cx},${H} L${pts[0].cx},${H} Z`;
//   const months = ["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"];
//   return (
//     <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full" preserveAspectRatio="none">
//       <defs>
//         <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#0f766e" stopOpacity="0.25" />
//           <stop offset="100%" stopColor="#0f766e" stopOpacity="0.02" />
//         </linearGradient>
//       </defs>
//       <path d={area} fill="url(#areaGrad)" />
//       <path d={path} fill="none" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//       {months.map((m, i) => (
//         <text key={m} x={pad + (i / (months.length - 1)) * (W - pad * 2)} y={H + 16} textAnchor="middle" fontSize="10" fill="#9ca3af">{m}</text>
//       ))}
//     </svg>
//   );
// }

// function StatusBadge({ status }) {
//   const s = status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700";
//   return <span className={`px-3 py-1 rounded-full text-xs font-medium ${s}`}>{status}</span>;
// }

// function Sidebar({ mobileOpen, setMobileOpen }) {
//   return (
//     <>
//       {mobileOpen && (
//         <div className="fixed inset-0 bg-black/40 z-10 lg:hidden" onClick={() => setMobileOpen(false)} />
//       )}
//       <aside className={`sticky top-0 left-0 h-full w-44 bg-white border-r border-gray-100 flex flex-col z-10 transition-transform duration-300
//         ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:flex`}>
//         <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-100">
//           <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
//             <HiBriefcase className="text-white text-sm" />
//           </div>
//           <div>
//             <p className="text-sm font-semibold text-gray-800 leading-tight">Broker Portal</p>
//             <p className="text-xs text-gray-400">Premium Tier</p>
//           </div>
//         </div>
//         <nav className="flex-1 py-4 px-2">
//           {navItems.map(({ icon: Icon, label, active }) => (
//             <button key={label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors
//               ${active ? "bg-teal-50 text-teal-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}>
//               <Icon className="text-lg flex-shrink-0" />
//               {label}
//             </button>
//           ))}
//         </nav>
//         <div className="px-2 pb-4 border-t border-gray-100 pt-3">
//           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 mb-1">
//             <HiOutlineQuestionMarkCircle className="text-lg" /> Help Center
//           </button>
//           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50">
//             <HiArrowRightOnRectangle className="text-lg" /> Sign Out
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

// function StatCards() {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
//       {statCards.map(({ icon: Icon, label, value, color }) => (
//         <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-2 shadow-sm">
//           <Icon className={`text-2xl ${color}`} />
//           <p className="text-xs text-gray-400">{label}</p>
//           <p className="text-lg font-bold text-gray-800">{value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// function BrokerCodeCard() {
//   const [copied, setCopied] = useState(false);
//   return (
//     <div className="bg-teal-700 rounded-2xl p-5 flex flex-col gap-4 h-full">
//       <h3 className="text-white font-semibold text-sm">Your Broker Code</h3>
//       <div className="bg-white/20 rounded-xl px-4 py-3 flex items-center justify-between">
//         <span className="text-white font-bold tracking-wider text-sm">SOV-BROKER-001</span>
//         <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}
//           className="text-white hover:text-teal-200 transition-colors">
//           <HiOutlineClipboardDocument className="text-xl" />
//         </button>
//       </div>
//       {copied && <p className="text-teal-200 text-xs -mt-2">Copied!</p>}
//       <div className="flex items-start gap-3 bg-white/10 rounded-xl p-3">
//         <div className="w-8 h-8 bg-white/20 rounded-lg flex-shrink-0 flex items-center justify-center">
//           <HiOutlineShare className="text-white text-sm" />
//         </div>
//         <p className="text-white/80 text-xs leading-relaxed">
//           Refer clients using this code to earn up to 5% commission on every fractional investment.
//         </p>
//       </div>
//       <button className="w-full bg-white text-teal-700 font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors mt-auto">
//         <HiOutlineShare className="text-base" /> Share Link
//       </button>
//     </div>
//   );
// }

// function ReferralChart() {
//   const [active, setActive] = useState("Monthly");
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm h-full">
//       <div className="flex items-start justify-between mb-4">
//         <div>
//           <h3 className="font-semibold text-gray-800 text-sm">Referral Performance</h3>
//           <p className="text-xs text-gray-400">Growth over last 12 months</p>
//         </div>
//         <div className="flex gap-1">
//           {["Weekly", "Monthly", "Yearly"].map(t => (
//             <button key={t} onClick={() => setActive(t)}
//               className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors
//                 ${active === t ? "bg-teal-700 text-white" : "text-gray-400 hover:text-gray-600"}`}>
//               {t}
//             </button>
//           ))}
//         </div>
//       </div>
//       <LineChart />
//     </div>
//   );
// }

// function RecentInvestors() {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
//       <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
//         <h3 className="font-bold text-gray-800 text-base">Recent Referred Investors</h3>
//         <button className="text-teal-700 text-sm font-medium flex items-center gap-1 hover:underline">
//           View All <HiOutlineChevronRight />
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-gray-50">
//               {["INVESTOR NAME", "CONTACT", "PROPERTY INVESTED", "AMOUNT", "DATE", "STATUS"].map(h => (
//                 <th key={h} className="text-left px-5 py-3 text-xs text-gray-400 font-medium whitespace-nowrap">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {recentInvestors.map((row) => (
//               <tr key={row.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
//                 <td className="px-5 py-4 font-semibold text-gray-800 whitespace-nowrap">{row.name}</td>
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{row.contact}</td>
//                 <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{row.property}</td>
//                 <td className="px-5 py-4 font-semibold text-gray-800 whitespace-nowrap">{row.amount}</td>
//                 <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{row.date}</td>
//                 <td className="px-5 py-4 whitespace-nowrap"><StatusBadge status={row.status} /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// function CommissionDetails() {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
//       <div className="px-5 py-4 border-b border-gray-50">
//         <h3 className="font-bold text-gray-800 text-base">Commission Details</h3>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="border-b border-gray-50">
//               {["PROPERTY", "INVESTOR", "COMMISSION", "STATUS"].map(h => (
//                 <th key={h} className="text-left px-5 py-3 text-xs text-gray-400 font-medium">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {commissionDetails.map((row) => (
//               <tr key={row.property} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
//                 <td className="px-5 py-4 text-gray-700">{row.property}</td>
//                 <td className="px-5 py-4 text-gray-600">{row.investor}</td>
//                 <td className="px-5 py-4 font-semibold text-teal-600">{row.commission}</td>
//                 <td className="px-5 py-4">
//                   <span className={`flex items-center gap-1.5 text-xs font-medium ${row.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
//                     <span className={`w-2 h-2 rounded-full ${row.status === "Paid" ? "bg-green-500" : "bg-yellow-500"}`} />
//                     {row.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// function EarningsSummary() {
//   return (
//     <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
//       <h3 className="font-bold text-gray-800 text-base mb-1">Earnings Summary</h3>
//       <p className="text-xs text-gray-500 mb-4">Next payout cycle: <span className="font-semibold text-gray-700">Oct 30, 2023</span></p>
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-xs text-gray-500">Monthly Target</span>
//         <span className="text-xs font-semibold text-gray-700">$10,000 / $15,000</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
//         <div className="bg-teal-700 h-2 rounded-full" style={{ width: "66%" }} />
//       </div>
//       <p className="text-xs text-gray-500 mb-5 leading-relaxed">
//         You've reached 66% of your monthly referral target. Reach $15k to unlock Platinum Tier commissions (6%).
//       </p>
//       <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition-colors">
//         Request Early Payout
//       </button>
//     </div>
//   );
// }

// function ActiveOpportunities() {
//   return (
//     <div className="mb-6">
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <h3 className="font-bold text-gray-800 text-base">Active Opportunities</h3>
//           <p className="text-xs text-gray-400">Recommended properties for your network</p>
//         </div>
//         <div className="flex gap-2">
//           <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500">
//             <HiOutlineChevronLeft className="text-sm" />
//           </button>
//           <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500">
//             <HiOutlineChevronRight className="text-sm" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
//         {opportunities.map((opp) => (
//           <div key={opp.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//             <div className="relative h-40">
//               <img src={opp.img} alt={opp.name} className="w-full h-full object-cover" />
//               <span className={`absolute top-3 left-3 ${opp.tagColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
//                 {opp.tag}
//               </span>
//               <span className={`absolute bottom-3 left-3 ${opp.roiColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
//                 {opp.roi}
//               </span>
//             </div>
//             <div className="p-4 flex items-end justify-between">
//               <div>
//                 <p className="font-bold text-gray-800 text-sm">{opp.name}</p>
//                 <p className="text-xs text-gray-400 mb-2">{opp.location}</p>
//                 <p className="text-xs text-gray-400">SHARE PRICE</p>
//                 <p className="font-bold text-gray-800 text-sm">{opp.price} <span className="text-gray-400 font-normal">/ share</span></p>
//               </div>
//               <button className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center hover:bg-yellow-300 transition-colors flex-shrink-0">
//                 <HiOutlineShare className="text-gray-800 text-base" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Header({ setMobileOpen }) {
//   return (
//     <div className="flex items-center justify-between mb-6">
//       <div className="flex items-center gap-3">
//         <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setMobileOpen(true)}>
//           <HiOutlineSquares2X2 className="text-2xl" />
//         </button>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">Broker Dashboard</h1>
//           <p className="text-sm text-gray-400">Track referrals, investments, and commissions.</p>
//         </div>
//       </div>
//       <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-800 transition-colors whitespace-nowrap">
//         <HiOutlineShare className="text-base" />
//         <span className="hidden sm:inline">Share Promo Code</span>
//       </button>
//     </div>
//   );
// }

// export default function BrokerDashboard() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
//       <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
//       <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 min-w-0">
//         <Header setMobileOpen={setMobileOpen} />
//         <StatCards />
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
//           <div className="lg:col-span-2">
//             <BrokerCodeCard />
//           </div>
//           <div className="lg:col-span-3">
//             <ReferralChart />
//           </div>
//         </div>
//         <RecentInvestors />
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
//           <div className="lg:col-span-2">
//             <CommissionDetails />
//           </div>
//           <div>
//             <EarningsSummary />
//           </div>
//         </div>
//         <ActiveOpportunities />
//       </main>
//     </div>
//   );
// }







import { useState } from "react";
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineChartBar, HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineSquares2X2, HiBriefcase, HiOutlineUsers, HiOutlineBanknotes, HiOutlineDocumentText, HiOutlineQuestionMarkCircle, HiArrowRightOnRectangle, HiOutlineShare, HiOutlineClipboardDocument, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { RiCopperCoinLine } from "react-icons/ri";

const navItems = [
  { icon: HiOutlineSquares2X2, label: "Overview", active: true },
  { icon: HiBriefcase, label: "Portfolio" },
  { icon: HiOutlineUsers, label: "Investors" },
  { icon: HiOutlineBanknotes, label: "Revenue" },
  { icon: HiOutlineDocumentText, label: "Documents" },
];

const statCards = [
  { icon: HiOutlineUserGroup, label: "Total Referrals", value: "1,284", color: "text-teal-700" },
  { icon: HiOutlineShieldCheck, label: "Total Converted", value: "432", color: "text-teal-700" },
  { icon: HiOutlineChartBar, label: "Total Investment", value: "$2.4M", color: "text-teal-700" },
  { icon: RiCopperCoinLine, label: "Total Earnings", value: "$86,400", color: "text-yellow-600" },
  { icon: HiOutlineCalendar, label: "Pending Comm.", value: "$12,150", color: "text-red-500" },
  { icon: HiOutlineCheckCircle, label: "Paid Comm.", value: "$74,250", color: "text-teal-700" },
];

const recentInvestors = [
  { name: "Jonathan Sterling", contact: "+91  XXXXX1234", property: "Azure Bay Penthouse", amount: "$125,000", date: "Oct 12, 2023", status: "Completed" },
  { name: "Amara Okafor", contact: "+91  XXXXX5678", property: "Golden Valley Estates", amount: "$45,000", date: "Oct 08, 2023", status: "In Process" },
  { name: "Kenji Tanaka", contact: "+91  XXXXX9812", property: "The Sovereign Tower", amount: "$250,000", date: "Sep 28, 2023", status: "Completed" },
];

const commissionDetails = [
  { property: "Azure Bay Penthouse", investor: "Jonathan S.", commission: "$6,250", status: "Paid" },
  { property: "The Sovereign Tower", investor: "Kenji T.", commission: "$12,500", status: "Pending" },
];

const opportunities = [
  { tag: "PREMIUM ASSET", tagColor: "bg-teal-700", roi: "8.4% Est. ROI", roiColor: "bg-teal-700", name: "Elysium Gardens", location: "Beverly Hills, California", price: "$2,500", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80" },
  { tag: "NEWLY ADDED", tagColor: "bg-teal-500", roi: "12.2% Est. ROI", roiColor: "bg-teal-500", name: "Indigo Reef Residences", location: "Malibu Coastline", price: "$10,000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80" },
  { tag: "COMMERCIAL", tagColor: "bg-slate-700", roi: "9.8% Est. Yield", roiColor: "bg-slate-700", name: "Metropolitan Plaza", location: "Downtown Business District", price: "$5,000", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80" },
];

const chartPoints = [
  { x: 0, y: 85 }, { x: 1, y: 80 }, { x: 2, y: 75 }, { x: 3, y: 60 },
  { x: 4, y: 45 }, { x: 5, y: 35 }, { x: 6, y: 30 }, { x: 7, y: 20 },
  { x: 8, y: 25 }, { x: 9, y: 30 }, { x: 10, y: 20 }, { x: 11, y: 10 },
];

function LineChart() {
  const W = 560, H = 160, pad = 10;
  const maxY = 100;
  const pts = chartPoints.map((p, i) => ({
    cx: pad + (i / (chartPoints.length - 1)) * (W - pad * 2),
    cy: pad + (p.y / maxY) * (H - pad * 2),
  }));
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.cx},${p.cy}`).join(" ");
  const area = path + ` L${pts[pts.length - 1].cx},${H} L${pts[0].cx},${H} Z`;
  const months = ["JAN", "MAR", "MAY", "JUL", "SEP", "NOV"];
  return (
    <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f766e" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaGrad)" />
      <path d={path} fill="none" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {months.map((m, i) => (
        <text key={m} x={pad + (i / (months.length - 1)) * (W - pad * 2)} y={H + 16} textAnchor="middle" fontSize="10" fill="#9ca3af">{m}</text>
      ))}
    </svg>
  );
}

function StatusBadge({ status }) {
  const s = status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700";
  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${s}`}>{status}</span>;
}

function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}
      <aside className={`fixed top-0 left-0 h-screen w-44 bg-white border-r border-gray-100 flex flex-col z-30 transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-shrink-0`}>
        <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-100">
          <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
            <HiBriefcase className="text-white text-sm" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 leading-tight">Broker Portal</p>
            <p className="text-xs text-gray-400">Premium Tier</p>
          </div>
        </div>
        <nav className="flex-1 py-4 px-2">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button key={label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors
              ${active ? "bg-teal-50 text-teal-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}>
              <Icon className="text-lg flex-shrink-0" />
              {label}
            </button>
          ))}
        </nav>
        <div className="px-2 pb-4 border-t border-gray-100 pt-3">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 mb-1">
            <HiOutlineQuestionMarkCircle className="text-lg" /> Help Center
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50">
            <HiArrowRightOnRectangle className="text-lg" /> Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

function StatCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
      {statCards.map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-2 shadow-sm">
          <Icon className={`text-2xl ${color}`} />
          <p className="text-xs text-gray-400">{label}</p>
          <p className="text-lg font-bold text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
}

function BrokerCodeCard() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="bg-teal-700 rounded-2xl p-5 flex flex-col gap-4 h-full">
      <h3 className="text-white font-semibold text-sm">Your Broker Code</h3>
      <div className="bg-white/20 rounded-xl px-4 py-3 flex items-center justify-between">
        <span className="text-white font-bold tracking-wider text-sm">SOV-BROKER-001</span>
        <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}
          className="text-white hover:text-teal-200 transition-colors">
          <HiOutlineClipboardDocument className="text-xl" />
        </button>
      </div>
      {copied && <p className="text-teal-200 text-xs -mt-2">Copied!</p>}
      <div className="flex items-start gap-3 bg-white/10 rounded-xl p-3">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex-shrink-0 flex items-center justify-center">
          <HiOutlineShare className="text-white text-sm" />
        </div>
        <p className="text-white/80 text-xs leading-relaxed">
          Refer clients using this code to earn up to 5% commission on every fractional investment.
        </p>
      </div>
      <button className="w-full bg-white text-teal-700 font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors mt-auto">
        <HiOutlineShare className="text-base" /> Share Link
      </button>
    </div>
  );
}

function ReferralChart() {
  const [active, setActive] = useState("Monthly");
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-800 text-sm">Referral Performance</h3>
          <p className="text-xs text-gray-400">Growth over last 12 months</p>
        </div>
        <div className="flex gap-1">
          {["Weekly", "Monthly", "Yearly"].map(t => (
            <button key={t} onClick={() => setActive(t)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors
                ${active === t ? "bg-teal-700 text-white" : "text-gray-400 hover:text-gray-600"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <LineChart />
    </div>
  );
}

function RecentInvestors() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
        <h3 className="font-bold text-gray-800 text-base">Recent Referred Investors</h3>
        <button className="text-teal-700 text-sm font-medium flex items-center gap-1 hover:underline">
          View All <HiOutlineChevronRight />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-50">
              {["INVESTOR NAME", "CONTACT", "PROPERTY INVESTED", "AMOUNT", "DATE", "STATUS"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs text-gray-400 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentInvestors.map((row) => (
              <tr key={row.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-5 py-4 font-semibold text-gray-800 whitespace-nowrap">{row.name}</td>
                <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{row.contact}</td>
                <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{row.property}</td>
                <td className="px-5 py-4 font-semibold text-gray-800 whitespace-nowrap">{row.amount}</td>
                <td className="px-5 py-4 text-gray-500 whitespace-nowrap">{row.date}</td>
                <td className="px-5 py-4 whitespace-nowrap"><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CommissionDetails() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="px-5 py-4 border-b border-gray-50">
        <h3 className="font-bold text-gray-800 text-base">Commission Details</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-50">
              {["PROPERTY", "INVESTOR", "COMMISSION", "STATUS"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs text-gray-400 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {commissionDetails.map((row) => (
              <tr key={row.property} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                <td className="px-5 py-4 text-gray-700">{row.property}</td>
                <td className="px-5 py-4 text-gray-600">{row.investor}</td>
                <td className="px-5 py-4 font-semibold text-teal-600">{row.commission}</td>
                <td className="px-5 py-4">
                  <span className={`flex items-center gap-1.5 text-xs font-medium ${row.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
                    <span className={`w-2 h-2 rounded-full ${row.status === "Paid" ? "bg-green-500" : "bg-yellow-500"}`} />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EarningsSummary() {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
      <h3 className="font-bold text-gray-800 text-base mb-1">Earnings Summary</h3>
      <p className="text-xs text-gray-500 mb-4">Next payout cycle: <span className="font-semibold text-gray-700">Oct 30, 2023</span></p>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">Monthly Target</span>
        <span className="text-xs font-semibold text-gray-700">$10,000 / $15,000</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div className="bg-teal-700 h-2 rounded-full" style={{ width: "66%" }} />
      </div>
      <p className="text-xs text-gray-500 mb-5 leading-relaxed">
        You've reached 66% of your monthly referral target. Reach $15k to unlock Platinum Tier commissions (6%).
      </p>
      <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition-colors">
        Request Early Payout
      </button>
    </div>
  );
}

function ActiveOpportunities() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-gray-800 text-base">Active Opportunities</h3>
          <p className="text-xs text-gray-400">Recommended properties for your network</p>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500">
            <HiOutlineChevronLeft className="text-sm" />
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-500">
            <HiOutlineChevronRight className="text-sm" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {opportunities.map((opp) => (
          <div key={opp.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="relative h-40">
              <img src={opp.img} alt={opp.name} className="w-full h-full object-cover" />
              <span className={`absolute top-3 left-3 ${opp.tagColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                {opp.tag}
              </span>
              <span className={`absolute bottom-3 left-3 ${opp.roiColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                {opp.roi}
              </span>
            </div>
            <div className="p-4 flex items-end justify-between">
              <div>
                <p className="font-bold text-gray-800 text-sm">{opp.name}</p>
                <p className="text-xs text-gray-400 mb-2">{opp.location}</p>
                <p className="text-xs text-gray-400">SHARE PRICE</p>
                <p className="font-bold text-gray-800 text-sm">{opp.price} <span className="text-gray-400 font-normal">/ share</span></p>
              </div>
              <button className="w-9 h-9 bg-yellow-400 rounded-xl flex items-center justify-center hover:bg-yellow-300 transition-colors flex-shrink-0">
                <HiOutlineShare className="text-gray-800 text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Header({ setMobileOpen }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setMobileOpen(true)}>
          <HiOutlineSquares2X2 className="text-2xl" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Broker Dashboard</h1>
          <p className="text-sm text-gray-400">Track referrals, investments, and commissions.</p>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-800 transition-colors whitespace-nowrap">
        <HiOutlineShare className="text-base" />
        <span className="hidden sm:inline">Share Promo Code</span>
      </button>
    </div>
  );
}

export default function BrokerDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="flex-1 h-screen overflow-y-auto p-4 sm:p-6 lg:p-8 min-w-0">
        <Header setMobileOpen={setMobileOpen} />
        <StatCards />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
          <div className="lg:col-span-2">
            <BrokerCodeCard />
          </div>
          <div className="lg:col-span-3">
            <ReferralChart />
          </div>
        </div>
        <RecentInvestors />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <CommissionDetails />
          </div>
          <div>
            <EarningsSummary />
          </div>
        </div>
        <ActiveOpportunities />
      </main>
    </div>
  );
}

