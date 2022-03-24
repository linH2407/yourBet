import React from "react";
import logo from "../atoms/logo.png";
import Register from "../molecules/buttons/Register";
import Login from "../molecules/buttons/Login";
const Navbar = () => {
  return (
    <div className="w-screen h-[100px] flex px-10 items-center fixed top-0 z-30 bg-[#16171b]">
      <div className="mr-5 hidden lg:flex pb-3">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <ul className="hidden lg:flex text-xs font-medium xs:text-xxl text-white ml-24">
          <li className="mx-3">SPORTS</li>
          <li className="mx-3">LIVE <i class="fa-solid fa-record-vinyl text-red-600 blur-xs text-xs"></i></li>
          <li className="mx-3">VIRTUAL SPORT</li>
          <li className="mx-3">BETGAMSE</li>
          <li className="mx-3">CASINO</li>
          <li className="mx-3">SPORT POKER</li>
          <li className="mx-3">PROMOTIONS</li>
        </ul>
      </div>
      
      <div className="px-6 hidden lg:flex  absolute right-3 mr-16">
        <Login/>
        <Register/>
      </div>
      <div className="hidden lg:flex">
      </div>
    </div>
  );
};

export default Navbar;
