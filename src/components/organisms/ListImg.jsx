import React from "react";
import people1 from "../atoms/people1.png";
import people2 from "../atoms/people2.png";
import people3 from "../atoms/people3.png";
import people4 from "../atoms/people4.png";
import people5 from "../atoms/people5.png";

const ListImg = () => {
  return (
    <div>
      <div className="bg-[#16171b] mt-8 rounded-lg">
        <div className="flex bg-black rounded-t-lg">
          <h2 className=" px-5">FOOTBALL LEAGUES </h2>
          <p className="text-[11px]">TOP LEAGE</p>
        </div>
        <div className="flex p-4 justify-between">
          <img src={people1} alt="people1" className="w-[90%]"/>
          <img src={people2} alt="people2" className="w-[90%] px-4"/>
          <img src={people3} alt="people3" className="w-[90%]"/>
          <img src={people4} alt="people4" className="w-[90%] px-4"/>
          <img src={people5} alt="people5" className="w-[90%]"/>
        </div>
      </div>
    </div>
  );
};

export default ListImg;
