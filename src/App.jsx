import  react, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './layouts/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

import Contact from './pages/Contact'
import About from './pages/About'

import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import OpenRoute from './components/core/Auth/OpenRoute'
import PropertyPage from './pages/Properties'
import Checkout from './pages/Checkout'
import KYCVerification from './pages/Kyc'
import PropertydetailPage from './pages/PropertyDetails'
import Portfolio from './pages/Portfolio'
import Payment from './pages/Payment'
import KycPanVerification from './pages/KycPanVerification'
import KycSubmission from './pages/KyuSubmission'
import KycReviewandSubmit from './pages/KycReviewAndSubmit'
import InvestmentSuccess from './pages/InvestmentSuccess'

import Lenis from "@studio-freight/lenis";
import BrokerDashboard from './pages/BrokerDashboard'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,     // smoothness (0.05 = very smooth)
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
          <div>
      <Routes  > 
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='property' element={<PropertyPage />} />
          <Route path='property-details' element={ <PropertydetailPage />} />
          
          <Route path='portfolio' element={<Portfolio />} />

          <Route path='investment-success' element={<InvestmentSuccess />} /> 
          <Route path='checkout' element={<Checkout />} />
          <Route path='payment' element={<Payment />} />

          <Route path='kyc' element={ <KYCVerification />} />
          <Route path='kyc-pan-verify' element={ <KycPanVerification/>} />
          <Route path='kyc-review' element={ <KycReviewandSubmit />} />
          <Route path='kyc-submission' element={ <KycSubmission />} />

           <Route path="login" element={
            <OpenRoute>
               <Login />
            </OpenRoute>
           } />
          <Route path="signup" element={
             <OpenRoute>
               <Signup />
             </OpenRoute>
           } />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={
             <PrivateRoute> <Dashboard /> </PrivateRoute>
           } />

          <Route path="broker-dashboard" element={ <BrokerDashboard /> } />



        </Route>
       
     </Routes>

</div>
  )
}

export default App
