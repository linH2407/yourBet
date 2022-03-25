import React, { useState } from "react";
import logo from "../atoms/logo.png";
import Register from "../molecules/buttons/Register";
import Login from "../molecules/buttons/Login";
import Search from "../molecules/search/Search";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="w-screen h-[100px] flex px-10 items-center fixed top-0 z-30 bg-[#16171b] grid grid-cols-12 justify-between">
        <div className="flex col-span-2">
          <div className=" flex mr-1">
            <img src={logo} alt="logo" className=" " />
          </div>
        </div>
        <div className="flex col-span-9">
          <div className=" hidden xl:flex flex w-[80%]">
            <ul className=" text-xs font-medium xs:text-xxl text-white pt-2 flex justify-around ml-6">
              <li className="mr-2 ">SPORTS</li>
              <li className="mx-2">
                LIVE
                <i class="fa-solid fa-record-vinyl text-red-600 blur-xs text-xs"></i>
              </li>
              <li className="mx-2">VIRTUAL SPORT</li>
              <li className="mx-2">BETGAMSE</li>
              <li className="mx-2">CASINO</li>
              <li className="mx-2">SPORT POKER</li>
              <li className="ml-2">PROMOTIONS</li>
            </ul>
          </div>
          <div className="ml-2 w-[80%] xl:hidden">
            <Search />
          </div>
        </div>
        <div className=" hidden xl:flex justify-end pr-5">
          <Login />
          <Register />
        </div>
        <div className="  xl:hidden flex justify-end">
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <i className="fa-solid fa-bars text-yellow-400"></i>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="absolute bg-[#16171b] right-0 h-screen w-1/2">
          <ul className=" text-white text-lg font-semibold xl:hidden flex flex-col items-center leading-loose">
            <li className="my-3" onClick={() => setShowMenu(false)}>
              SPORTS
            </li>
            <li className="my-3" onClick={() => setShowMenu(false)}>
              LIVE
              <i class="fa-solid fa-record-vinyl text-red-600 blur-xs text-xs"></i>
            </li>
            <li className="my-3" onClick={() => setShowMenu(false)}>
              VIRTUAL SPORT
            </li>
            <li className="my-3" onClick={() => setShowMenu(false)}>
              BETGAMSE
            </li>
            <li className="my-3" onClick={() => setShowMenu(false)}>
              CASINO
            </li>
            <li className="my-3" onClick={() => setShowMenu(false)}>
              SPORT POKER
            </li>
            <li className="my-3" onClick={() => setShowMenu(false)}>
              PROMOTIONS
            </li>
          </ul>
          <div className="flex flex-col items-center">
            <div className="my-3 border-2 rounded-sm">
              <Login />
            </div>
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
