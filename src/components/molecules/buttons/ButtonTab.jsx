import React from "react";

const ButtonTab = ({ name }) => {
  return (
    <div>
      <button
        type="button"
        className="text-black hover:bg-yellow-400 active:bg-yellow-400 focus:outline-none focus:bg focus:bg-yellow-400 shadow-lg shadow-black-600 text-[12px] font-bold text-center w-[90%] md:w-auto"
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonTab;
