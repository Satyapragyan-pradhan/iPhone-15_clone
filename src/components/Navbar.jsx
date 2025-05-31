import React from "react";
import { appleImg } from "../utils";
import { searchImg, bagImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <>
      <header className="w-full py-5 sm:px-18 px-5 flex justify-between items-center">
        <nav className="flex w-full justify-between items-center">
          <img src={appleImg} alt="Apple" width={14} height={18} />
          <div className="flex space-x-6">
            {navLists.map((nav, i) => (
              <div
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all sm:block hidden"
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex space-x-6 ">
            <img src={searchImg} alt="Search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
