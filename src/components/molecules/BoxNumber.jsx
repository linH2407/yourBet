import React from "react";

const BoxNumber = ({ num }) => {
  return (
    <button className="p-2 bg-[#2f3034] rounded-md text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:bg focus:bg-blue-700 shadow-lg shadow-black-600 text-[12px] font-semibold w-[80%] sm:w-[25%]  text-center my-1">
      {num}
    </button>
  );
};

export default BoxNumber;
