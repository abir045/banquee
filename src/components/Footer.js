import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-around mx-[10%] mt-[5%]">
        <h2 className="flex text-[32px] leading-8 font-bold text-[#5bb5a2] tracking-[-0.03em]">
          banquee.
        </h2>

        <div className="flex flex-col">
          <ul className="flex flex-col space-y-5">
            <li className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em] mb-[15%]">
              About
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Features
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Pricing
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Support
            </li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <ul className="flex flex-col space-y-5">
            <li className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em] mb-[15%]">
              Blog
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Products
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Technology
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Crypto
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <ul className="flex flex-col space-y-5">
            <li className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em] mb-[15%]">
              Webflow
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Styleguide
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Licensing
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Changelog
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <ul className="flex flex-col space-y-5">
            <li className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em] mb-[15%]">
              Social Media
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Twitter
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Facebook
            </li>
            <li className="text-[16px] leading-[25.6px] font-medium opacity-50">
              Instagram
            </li>
          </ul>
        </div>
      </div>

      <hr className="bg-[#e8e8e8] h-[1px] mt-[10%] mx-[15%]" />

      <div className="flex mx-[15%] mt-5 justify-between mb-[5%] ">
        <p
          style={{ fontFamily: "Inter" }}
          className="text-[14px] leading-[22.4px] font-medium opacity-50"
        >
          © Made by <span className="text-[#5bb5a2]">Pawel Gola</span> - Powered
          by <span className="text-[#5bb5a2]">Webflow</span>
        </p>

        <div className="flex text-[14px] font-medium leading-[22.4px] opacity-50 space-x-5">
          <span>Impressum</span>
          <span>Datenschutz</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
