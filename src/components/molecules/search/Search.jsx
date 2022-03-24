import React from "react";

const Search = () => {
  return (
    <div>
      <label class="relative block">
        <input
          class=" placeholder:text-slate-400 block bg-[#222327] w-full rounded-full py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-black-500 focus:ring-black-500 focus:ring-1 sm:text-sm"
          placeholder="Search"
          type="text"
          name="search"
        />
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 right-0 flex items-center pl-2 pt-2 bg-yellow-400 rounded-full border-black ">
          <svg class="h-7 w-7 fill-black-200" viewBox="0 0 20 20">
            <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default Search;
