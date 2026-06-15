import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./index.css";
import PageNotFound404 from "./PageNotFound404";
import Header from "./Header";

export default function MainComponent() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/home" Component={Home}/> */}
          <Route path="" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

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