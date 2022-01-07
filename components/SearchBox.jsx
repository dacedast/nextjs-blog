import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchBox = () => {
  return (
    <div className="shadow-lg rounded-lg p-8 mb-8 w-full lg:w-full">
      <form action="">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <BsSearch size={20} className="absolute ml-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search..."
            autoComplete="off"
            aria-label="Search..."
            className="pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 outline-none w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
