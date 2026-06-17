import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./index.css";
import PageNotFound404 from "./PageNotFound404";
import Header from "./Header";
import User from "./User";
import WraperComponent from "./WraperComponent";

export default function MainComponent() {
  return (
    <div className="main_com">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/home" Component={Home}/> */}
          <Route path="" element={<WraperComponent><Home /></WraperComponent>} />
          <Route path="" element={<Home />} />
          <Route path="/about-us" element={<WraperComponent><AboutUs /></WraperComponent>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// home -> main 
// home -> wrap -> home

/*
export default function MainComponent() {
  return (
    <div>
        <div className="bg-black text-white flex justify-center">
          <ul className="flex gap-3">
            <li>Home</li>
            <li>About us</li>
            <li>Faq</li>
          </ul>
        </div>
        <Home />
        <AboutUs />
        <FAQ />
    </div>
  );
}
*/


// task -> home -> btn -> aboutus, btn2 -> faq
// about us -> btn -> faq
// faq -> back 