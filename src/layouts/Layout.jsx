import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  const hideNavbar = 
  location.pathname === "/login" || 
  location.pathname === "/signup";
  return (
    <>
    
       {!hideNavbar && <Navbar />}
      <Outlet />
      <Footer />
      
    </>
  );
};

export default Layout;