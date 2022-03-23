import React from "react";
import CheckBox from "../../molecules/checkbox/CheckBox";

const CardLive = () => {
  return (
    <div className="pt-4">
      <div className="bg-[#222126] mt-20 rounded-lg">
        <div className="bg-black rounded-t-lg">
          <h2 className="border-b mx-3">SPORT</h2>
          <div>
            <ul className="text-white flex text-xs pl-3 py-2">
              <li>All</li>
              <li>1h</li>
              <li>3h</li>
              <li>6h</li>
              <li>12h</li>
              <li>24h</li>
            </ul>
          </div>
        </div>
        <div className="px-3">
          <div className="flex border-b">
            <p className="text-yellow-400 font-medium ">LIVE BETTING</p>{" "}
            <span className="bg-red-700 px-2 h-4 rounded-lg text-[10px] text-white mt-2">
              LIVE 71
            </span>
          </div>
          <CheckBox name="Football" />
          <CheckBox name="Basketball" />
          <CheckBox name="Tennis" />
          <CheckBox name="Ice Hockey" />
          <CheckBox name="Volleyball" />
          <CheckBox name="UFC" />
          <CheckBox name="Australian rules" />
          <CheckBox name="Motor Sport" />
          <CheckBox name="Baseball" />
          <CheckBox name="Billiard" />
          <CheckBox name="Darts" />
          <CheckBox name="WaterPolo" />
          <CheckBox name="MMA" />
          <CheckBox name="Lottery" />
          <CheckBox name="Table Tennis" />
          <CheckBox name="Box" />
          <CheckBox name="Politics" />
          <CheckBox name="Rugby" />
          <CheckBox name="Football/Ante-post" />
        </div>
      </div>
    </div>
  );
};

export default CardLive;
