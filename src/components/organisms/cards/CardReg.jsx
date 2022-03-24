import React from "react";

const CardReg = () => {
  return (
    <div className="bg-gradient-to-bl from-zinc-900 p-4 rounded-2xl mt-4">
      <h2 className="font-semibold text-sm px-7 text-center">
        WANT TO PLACE A LOSING <span className="text-yellow-400">BET?</span>
      </h2>
      <div className="px-3">
        <button
          type="button"
          className="text-black w-[100%] bg-yellow-400 shadow-lg shadow-black-600 mt-1 rounded-[4px]"
        >
          JOIN NOW
        </button>
        <div>
          <button type="button" className="text-white w-[100%] border-[1px] mt-3 rounded-[4px]">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardReg;
