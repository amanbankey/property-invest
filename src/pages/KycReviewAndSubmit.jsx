
import { useState } from "react";
import { FiHelpCircle, FiBell, FiUser, FiCreditCard, FiFileText, FiCamera, FiCheckSquare, FiShield, FiCheck } from "react-icons/fi";
import { BsBank2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NAV_STEPS = [
  { icon: <FiUser size={16} />, label: "Basic Info" },
  { icon: <FiCreditCard size={16} />, label: "PAN Verify" },
  { icon: <FiFileText size={16} />, label: "ID Verify" },
  { icon: <FiFileText size={16} />, label: "Documents" },
  { icon: <FiCamera size={16} />, label: "Selfie" },
  { icon: <BsBank2 size={16} />, label: "Bank Details" },
  { icon: <FiCheckSquare size={16} />, label: "Review", active: true },
];

const PROGRESS = [
  { label: "INFO" },
  { label: "PAN" },
  { label: "ID" },
  { label: "DOCS" },
  { label: "BANK" },
  { label: "FINAL", num: "06" },
];

const DOCS = [
  { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&q=80", name: "ID_FRONT.JPG" },
  { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80", name: "BANK_STMT.PDF" },
  { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80", name: "SELFIE.PNG" },
];

function Sidebar({ active, setActive }) {
  return (
    <aside className="hidden md:flex w-48 lg:w-52 bg-white border-r border-gray-200 flex-col py-6 px-4 shrink-0">
      <div className="mb-8">
        <p className="text-sm font-extrabold text-gray-900">KYC Verification</p>
        <p className="text-xs text-gray-400">Sovereign Compliance</p>
      </div>
      <nav className="space-y-1">
        {NAV_STEPS.map((s, i) => (
          <button key={s.label} onClick={() => setActive(i)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors ${active === i ? "text-emerald-800 font-semibold border-l-4 border-emerald-700 bg-white rounded-r-xl" : "text-gray-400 hover:text-gray-700 rounded-xl hover:bg-gray-50"}`}>
            <span>{s.icon}</span>
            <span className="text-sm">{s.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function ProgressStepper() {
  return (
    <div className="flex items-center justify-center gap-0 mb-8 overflow-x-auto pb-2">
      {PROGRESS.map((step, i) => (
        <div key={step.label} className="flex items-center shrink-0">
          <div className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 ${i < 5 ? "bg-emerald-700 border-emerald-700 text-white" : "bg-white border-emerald-700 text-emerald-800"}`}>
              {i < 5 ? <FiCheck size={16} /> : step.num}
            </div>
            <span className="text-[9px] text-gray-400 mt-1 font-semibold tracking-widest">{step.label}</span>
          </div>
          {i < PROGRESS.length - 1 && (
            <div className={`h-0.5 w-10 sm:w-16 lg:w-20 mb-4 mx-0.5 ${i < 4 ? "bg-emerald-700" : "bg-gray-300"}`}></div>
          )}
        </div>
      ))}
    </div>
  );
}

function Section({ title, type,  setActive, children }) {

  const onEdit = (e) => {
    e.preventDefault() ;
    setActive(type)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 mb-4 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-emerald-800">{title}</h2>
        <button className="text-sm text-gray-500 hover:text-emerald-700 font-medium transition-colors"
         onClick={onEdit}>
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

function Field({ label, value, icon }) {
  return (
    <div>
      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        {icon && <span className="text-gray-500">{icon}</span>}
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default function KycReviewandSubmit({setActive}) {
  const [activeNav, setActiveNav] = useState(6);
  const [confirmed, setConfirmed] = useState(false);

  const { aadhaarNumber, panNum, name,  email, dob, address, isVerified  } = useSelector((state) => state.kyc);
  // console.log("ke", aadhaarNumber, panNum, name,  email, dob, address, isVerified);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      <div className="flex flex-1">
        {/* <Sidebar active={activeNav} setActive={setActiveNav} /> */}

        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Review & Submit</h1>
            <p className="text-gray-500 text-sm mb-8">Please double check your details before final submission</p>

            {/* <ProgressStepper /> */}

            <Section title="Personal Info" setActive={setActive} type="basic" >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" value={name} />
                <Field label="Email Address" value={email} />
                <div className="sm:col-span-1 space-y-5 ">
                  <Field label="dob" value={dob} />
                  <Field label="Residential Address" value={address} />
                </div>
              </div>
            </Section>

            <Section title="Pan Verification" setActive={setActive}  type="pan">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="PAN Number" value={panNum.panNum} />
                <Field label="Document Type" value="Passport (United Kingdom)" icon={<FiShield size={14} className="text-emerald-700" />} />
              </div>
            </Section>


            <Section title="Aadhar Verification" setActive={setActive}  type="id">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Aadhar Number" value={aadhaarNumber.aadhaarNumber} />
                {/* <Field label="Document Type" value="Passport (United Kingdom)" icon={<FiShield size={14} className="text-emerald-700" />} /> */}
              </div>
            </Section>

            <Section title="Uploaded Documents" >
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
                {DOCS.map(doc => (
                  <div key={doc.name} className="rounded-xl overflow-hidden border border-gray-200">
                    <img src={doc.img} alt={doc.name} className="w-full h-28 sm:h-36 object-cover" />
                    <div className="bg-white px-2 py-1.5 border-t border-gray-100">
                      <p className="text-[10px] text-gray-500 font-semibold tracking-wider truncate">{doc.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Bank Details">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Primary</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Field label="Account Holder" value="E. Sterling-Wellesley" />
                <Field label="Account Number" value="**** **** 8829" />
                <Field label="Bank Name" value="Standard Chartered Wealth" />
              </div>
            </Section>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 flex items-start gap-3">
              <button onClick={() => setConfirmed(!confirmed)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${confirmed ? "bg-emerald-700 border-emerald-700" : "border-gray-400 bg-white"}`}>
                {confirmed && <FiCheck size={12} className="text-white" />}
              </button>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">I confirm all details are correct</p>
                <p className="text-xs text-gray-500 leading-relaxed">I hereby declare that the information provided is true and accurate to the best of my knowledge. I understand that providing false information may result in application rejection.</p>
              </div>
            </div>

            <div className="flex items-center justify-between pb-8">
              <button className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">Save as Draft</button>
              <button disabled={!confirmed}
                className={`px-8 py-3.5 rounded-2xl text-sm font-bold transition-colors ${confirmed ? "bg-emerald-800 hover:bg-emerald-900 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
               <NavLink to='/kyc-submission'>
                     Submit KYC
               </NavLink>
               
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}