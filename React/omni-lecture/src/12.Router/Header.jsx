import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();


  const loginHandler =()=>{
    // localStorage.setItem("isLogin","true")
    navigate("/login")
  }
  return (
    <div className="bg-black p-2">
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
      <div className=" text-white flex justify-center">
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
        <Button className="ml-6 bg-white text-green-400" onClick={()=>loginHandler()}>Login</Button>
        <Button
          className="ml-6 bg-white text-green-400"
          onClick={() => navigate("/profile")}
        >
          <CircleUserRound />
        </Button>
      </div>
    </div>
  );
}
