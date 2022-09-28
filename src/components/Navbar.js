import React from "react";
import logo from "../images/Vector.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around items-center h-[91px]">
        <a href="/">
          <h1 className="flex font-bold text-[#5BB5A2] text-[32px] tracking-[-0.03em]">
            banquee.
          </h1>
        </a>
        <ul
          style={{
            fontFamily: "Inter",
          }}
          className="flex space-x-5 font-medium text-base text-[#1A191E]"
        >
          <li>
            <a href="/features">Features</a>
          </li>
          <li className="flex space-x-2">
            <a href="/compare">Compare</a>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li className="flex space-x-2">
            <a href="/blog">Blog</a>
            <img src={logo} alt="logo" />
          </li>
        </ul>

        <div className="flex space-x-7 font-bold items-center">
          <button className="text-[#5BB5A2] text-lg leading-[18px] font-bold tracking-[-0.03em]">
            Login
          </button>
          <button className="text-[15px] font-medium bg-[#5BB5A2] text-white p-3 rounded-[6px] hover:bg-[#E8F2EE] hover:text-[#5BB5A2]">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
