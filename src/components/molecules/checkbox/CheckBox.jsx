import React from "react";

const CheckBox = ({ name }) => {
  return (
    <div className="border-b flex justify-between">
      <label
        class="form-check-label inline-block text-white text-xs pl-2 py-2"
        for="flexCheckDefault"
      >
     {name}
      </label>
      <input
        class="form-check-input appearance-none h-4 w-4 border border-white-500 rounded-sm checked:border-white-600 focus:outline-none transition duration-200 bg-no-repeat bg-transparent cursor-pointer mt-2 mr-2"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
    </div>
  );
};

export default CheckBox;
