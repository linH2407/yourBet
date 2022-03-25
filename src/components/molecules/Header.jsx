import React from "react";

const Header = ({name}) => {
  return (
    <div className="flex bg-black rounded-t-lg py-[3px] grid grid-cols-12 ">
      <div className="col-span-6 sm:col-span-3 md:col-span-5 border-r">
        <h2 className=" text-md pl-4">{name}</h2>
      </div>
      <div className="flex justify-evenly col-span-2 flex-col text-center sm:flex-row sm:col-span-4 md:col-span-3 border-r ">
        <p>W1</p>
        <p>X</p>
        <p>W2</p>
      </div>
      <div className="text-center flex justify-evenly col-span-2 flex-col sm:flex-row sm:col-span-4 md:col-span-3 border-r">
        <p>TOTAL</p>
        <p>OVER</p>
        <p>UNDER</p>
      </div>
      <div className="col-span-1 md:col-span-1"></div>
    </div>
  );
};

export default Header;
