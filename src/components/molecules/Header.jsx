import React from "react";

const Header = ({name}) => {
  return (
    <div className="flex bg-black rounded-t-lg py-[3px] ">
      <div className="w-[50%] border-r">
        <h2 className="w-[95%] mx-auto text-md">{name}</h2>
      </div>
      <div className="flex justify-evenly w-[20%] border-r ">
        <p>W1</p>
        <p>X</p>
        <p>W2</p>
      </div>
      <div className="flex justify-evenly w-[20%] border-r">
        <p>TOTAL</p>
        <p>OVER</p>
        <p>UNDER</p>
      </div>
      <div className="w-[10%]"></div>
    </div>
  );
};

export default Header;
