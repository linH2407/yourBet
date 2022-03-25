import React from "react";
import Amount from "../../molecules/Amount";
import Clear from "../../molecules/buttons/Clear";
import PlaceBet from "../../molecules/buttons/PlaceBet";
import CheckList from "../../molecules/checkbox/CheckList";
import Total from "../../molecules/Total";

const CardList = () => {
  return (
    <div className="mt-16 pt-2">
      <div className="flex text-center mx-10 p-1 bg-blue-800 rounded-t-xl ">
        <h2 className="border-r w-[50%]">BEST SLIP</h2>
        <h2>MY BETS</h2>
      </div>
      <div className="bg-blue-800 rounded-2xl shadow-black ">
        <div className="flex justify-around ">
          <h2>SINGLE BET</h2>
          <h2>PARPLAY</h2>
          <h2>SYSTEM</h2>
        </div>
        <div className="bg-[#2d2e32] mx-1 px-3 rounded-b-xl">
          <CheckList name="Roma - Atalanta" point="3.10" />
          <CheckList name="Napoil - Lazio" point="4.10" />
          <CheckList name="Leicerster - West Born" point="2.00" />
          <CheckList name="Man. United - Chelsea" point="1.47" />
          <CheckList name="Milan - Lazio" point="4.29" />
          <CheckList name="Real Madrid - Celata" point="4.10" />
          <div className="py-5 px-2">
            <Amount />
          </div>
          <div  className='bg-[#222327] mx-[-12px] px-3 py-1'>
              <Total/>
          </div>
          <div className="flex mt-3 justify-between px-1">
              <Clear/>
              <PlaceBet/>
          </div>
          <div className="mt-3 pb-7">
              <p className="font-semibold text-[13px]">Accept all odds change</p>

          </div>
        </div>
        <div className="text-blue-800 mt-[-20px]">-</div>
      </div>
    </div>
  );
};

export default CardList;
