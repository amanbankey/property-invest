import { useState, useEffect } from "react";
import {
  FiUser,
  FiCreditCard,
  FiFileText,
  FiCamera,
  FiHome,
  FiCheckSquare,
  FiBell,
  FiShield,
  FiLock,
  FiCheck,
} from "react-icons/fi";

import { MdOutlineAccountBalance, MdTrendingUp } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import KycPanVerification from "./KycPanVerification";
import AadharVerify from "./AadharVerify";
import KycReviewandSubmit from "./KycReviewAndSubmit";

import { useDispatch } from "react-redux";
import { setKycData } from "../slices/kycslice";

const steps = [
  { key: "basic", label: "BASIC INFO", icon: <FiUser size={16} /> },
  { key: "pan", label: "PAN VERIFY", icon: <FiCreditCard size={16} /> },
  { key: "id", label: "ID VERIFY", icon: <FiFileText size={16} /> },

  // { key: "selfie", label: "SELFIE", icon: <FiCamera size={16} /> },
  { key: "review", label: "REVIEW", icon: <FiCheckSquare size={16} /> },
];

function StepBar({ active }) {
  return (
    <div className="w-full overflow-x-auto pb-1">
      <div className="flex items-start justify-center min-w-max mx-auto px-2 gap-0">
        {steps.map((step, i) => {
          const isActive = step.key === active;
          const isDone = i < steps.findIndex((s) => s.key === active);

          return (
            <div key={step.key} className="flex items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 transition-all
                    ${
                      isActive
                        ? "bg-teal-800 border-teal-800 text-white"
                        : isDone
                        ? "bg-teal-100 border-teal-300 text-teal-700"
                        : "bg-white border-gray-200 text-gray-400"
                    }`}
                >
                  {step.icon}
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-semibold mt-1.5 tracking-wide ${
                    isActive ? "text-teal-800" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-10 sm:w-14 lg:w-20 h-px mt-5 mx-1 ${
                    isDone ? "bg-teal-300" : "bg-gray-200"
                  }`}
                />
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
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
          Complete KYC to unlock fractional shares in this prime real estate
          asset.
        </p>
        <div className="mt-3">
          <div className="flex justify-between text-[10px] font-semibold text-gray-400 uppercase mb-1">
            <span>Funding Status</span>
            <span className="text-teal-700">75% Complete</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div
              className="bg-amber-400 h-1.5 rounded-full"
              style={{ width: "75%" }}
            />
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
        <p className="text-teal-700 font-semibold text-sm">
          Your data is secure and encrypted
        </p>
        <p className="text-gray-500 text-xs mt-0.5">
          We use AES-256 bank-level encryption for all KYC documents.
        </p>
      </div>
    </div>
  );
}

function BasicInfoForm({setActive}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const validate = () => {
    let newErrors = {};

    // ✅ Name
    const nameRegex = /^[A-Za-z ]{3,50}$/;
    if (!nameRegex.test(form.name)) {
      newErrors.name = "Name must be 3-50 letters only";
    }

    // ✅ Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    let today = new Date();
    let selectedDate = new Date(form.dob);

    if (!form.dob) {
      newErrors.dob = "Date of birth is required";
    } else if (selectedDate > today) {
      newErrors.dob = "Please provide correct date";
    }

    // ✅ Address
    if (form.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    return newErrors;
  };

  const inputCls =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-200 transition-all";

  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
    
      // console.log(form);
      
      dispatch(setKycData({
        name: form.name,
        email: form.email,
        dob: form.dob,
        address: form.address,
      }));

      setForm({
        name: "",
        email: "",
        dob: "",
        address: "",
      });
      setActive("pan")
    } else {
      setErrors(validationErrors);
    }

    // try{

    // }catch(err){

    // }
  };

  return (
    <div className="space-y-5">
      <form onSubmit={onSubmit}>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name (as per PAN Card){" "}
              <sup className="text-emerald-800">*</sup>
            </label>
            <input
              className={inputCls}
              placeholder="Enter your name "
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <sup className="text-emerald-800">*</sup>
              </label>
              <input
                type="email"
                className={inputCls}
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <p style={{ color: "red" }}>{errors.email}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth <sup className="text-emerald-800 ">*</sup>
              </label>
              <input
                type="date"
                placeholder="Enter dob"
                className={inputCls}
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
                max={new Date().toISOString().split("T")[0]}
              />
              <p style={{ color: "red" }}>{errors.dob}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Residential Address <sup className="text-emerald-800">*</sup>
            </label>
            <textarea
              className={`${inputCls} resize-none h-24`}
              placeholder="Enter your full permanent address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <p style={{ color: "red" }}>{errors.address}</p>
          </div>

          <SecurityBadge />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
            <button
              type="submit"
              className="w-full sm:w-auto bg-teal-800 text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-teal-900 active:scale-95 transition-all"
            >
              Next Step
            </button>

            <button
              type="button"
              className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              Save and finish later
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function FormCard({ setActive}) {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 xl:mr-72">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          Basic Information
        </h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Please provide your personal details for verification. This
          information is required by law for high-value fractional investments.
        </p>
        <BasicInfoForm setActive={setActive} />
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
        <div
          key={b.label}
          className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold"
        >
          {b.icon}
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function KYCVerification() {
  const [active, setActive] = useState("basic");
  const [show, setShow] = useState(0);
  const [edit,  setEdit] = useState('');

  useEffect(() => {
    // console.log("EDIT VALUE:", edit);
  }, [edit]);

  return (
    <div className="  bg-slate-50 font-sans">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 y">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-800 mb-1">
            KYC Verification
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Sovereign Compliance Platform
          </p>
        </div>
        <div className="flex justify-center mb-8 sm:mb-10 y">
          <StepBar active={active} />
        </div>

        {active === "basic" && <FormCard  setActive={setActive} />}
        {active  === "pan" && <KycPanVerification  setActive={setActive}  />}
        {active === "id" && <AadharVerify  setActive={setActive} />}
        {active === "review" && <KycReviewandSubmit  setActive={setActive}  />}

        {/* <FooterBadges /> */}
      </main>
    </div>
  );
}
