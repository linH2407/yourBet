import React from "react";

const CheckList = ({ name, point }) => {
  return (
    <div>
      <div className="border-b">
        <div className="py-1">
          <input
            class="form-check-input appearance-none h-4 w-4  rounded-sm checked:border-yellow-500 focus:outline-none transition duration-200 bg-no-repeat bg-yellow-500 float-left cursor-pointer mt-2 ml-2"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            class="form-check-label inline-block text-white text-xs pl-2 py-2"
            for="flexCheckDefault"
          >
            {name}
          </label>
          <i className="fa-solid fa-xmark float-right text-[14px] text-white pt-3"></i>
        </div>
        <div>
            <p className="text-[#6f6f6f] font-semibold">3 way match betting</p>
        </div>
        <div className="flex justify-between">
            <p>Draw</p>
            <p>{point}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
