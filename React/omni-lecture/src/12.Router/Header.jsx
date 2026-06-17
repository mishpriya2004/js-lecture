import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* <div className="bg-black text-white flex justify-center">
          <ul className="flex gap-3">
          <Link to={"/"}>
          <li>Home</li>
          </Link>
          <Link to={"/about-us"}>
          <li>About us</li>
          </Link>
          <Link to={"/faq"}>
          <li>Faq</li>
          </Link>
          </ul>
          </div> */}
      <div className="bg-black text-white flex justify-center">
        <ul className="flex gap-3">
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about-us"}>
            <li>About us</li>
          </NavLink>
          <NavLink to={"/faq"}>
            <li>Faq</li>
          </NavLink>
          {/* <NavLink to={"/user"}>
            <li>User</li>
          </NavLink> */}
        </ul>
      </div>
    </div>
  );
}
