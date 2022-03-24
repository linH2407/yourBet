import React from "react";
import BoxNumber from "../molecules/BoxNumber";
import Header from "../molecules/Header";

const UFC = () => {
  return (
    <div>
      <div>
        <div className="bg-[#16171b] mt-8 rounded-lg">
          <Header name="UFC" />
          <div className="flex border-b">
            <div className="w-[10%] border-r my-2">
              <div className="w-[60%] mx-auto">
                <h2>19:30</h2>
                <p className="text-[#6f6f6f] font-semibold">22 apr</p>
              </div>
            </div>
            <div className="w-[40%] border-r my-2">
              <div className="w-[90%] mx-auto">
                <h2>Roma</h2>
                <h2>Atalanta</h2>
              </div>
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="4.00" />
              <BoxNumber num="-" />
              <BoxNumber num="1.85" />
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="3.5" />
              <BoxNumber num="3.5" />
              <BoxNumber num="3.5" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <h2>+1406</h2>
            </div>
          </div>
          <div className="flex border-b">
            <div className="w-[10%] border-r my-2">
              <div className="w-[60%] mx-auto">
                <h2>21:45</h2>
                <p className="text-[#6f6f6f] font-semibold">22 apr</p>
              </div>
            </div>
            <div className="w-[40%] border-r my-2">
              <div className="w-[90%] mx-auto">
                <h2>Napoli</h2>
                <h2>Lazio</h2>
              </div>
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="2.07" />
              <BoxNumber num="-" />
              <BoxNumber num="3.55" />
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="2.5" />
              <BoxNumber num="1.66" />
              <BoxNumber num="2.30" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <h2>+1406</h2>
            </div>
          </div>
          <div className="flex border-b">
            <div className="w-[10%] border-r my-2">
              <div className="w-[60%] mx-auto">
                <h2>23:30</h2>
                <p className="text-[#6f6f6f] font-semibold">22 apr</p>
              </div>
            </div>
            <div className="w-[40%] border-r my-2">
              <div className="w-[90%] mx-auto">
                <h2>Leicerter</h2>
                <h2>West Brom</h2>
              </div>
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="1.61" />
              <BoxNumber num="-" />
              <BoxNumber num="5.90" />
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="2.5" />
              <BoxNumber num="1.85" />
              <BoxNumber num="2.01" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <h2>+1617</h2>
            </div>
          </div>
          <div className="flex border-b">
            <div className="w-[10%] border-r my-2">
              <div className="w-[60%] mx-auto">
                <h2>19:30</h2>
                <p className="text-[#6f6f6f] font-semibold">22 apr</p>
              </div>
            </div>
            <div className="w-[40%] border-r my-2">
              <div className="w-[90%] mx-auto">
                <h2>FC Porto</h2>
                <h2>Vitoria Guimaraes</h2>
              </div>
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="1.31" />
              <BoxNumber num="-" />
              <BoxNumber num="9.00" />
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="2.5" />
              <BoxNumber num="1.68" />
              <BoxNumber num="2.18" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <h2>+655</h2>
            </div>
          </div>
          <div className="px-4 py-1">
              <p className="text-[#6f6f6f] font-bold">MORE EVENTS  <i className="fa-solid fa-angle-down text-xs"></i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UFC;
