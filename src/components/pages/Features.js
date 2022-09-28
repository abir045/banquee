import React from "react";
import { FeaturesContent } from "../../DataList";

const Features = () => {
  const {
    banner,
    transactions,
    cards,
    allInOne,
    statistics,
    cardDetails,
    integration,
    savings,
  } = FeaturesContent;

  return (
    <div>
      <div className="flex flex-col  text-center  pt-[8%] items-center text-[#1A191E] bg-[#E8F2EE]">
        <h5 className="flex text-xl leading-6  font-medium ">{banner.tag}</h5>
        <h1 className="text-[80px] font-medium tracking-[-0.03em]">
          {banner.heading}
        </h1>
        <p
          style={{
            fontFamily: "Inter",
          }}
          className="text-[20px] leading-9 w-[30%]"
        >
          {banner.body}
        </p>

        <div className="flex space-x-6 pt-5 text-[18px] leading-[18px]">
          <button className="text-white  bg-[#5BB5A2] p-4 rounded-[6px]  font-medium tracking-[-0.03em]">
            {banner.buttonAc}
          </button>
          <button className="text-[#5BB5A2] font-medium ">
            {banner.buttonCom}
          </button>
        </div>
        <div className="flex justify-between space-x-10 w-full pt-[8%] ">
          <img src={banner.card0} alt="card" />
          <img src={banner.card1} alt="card" />
          <img src={banner.card2} alt="card" />
          <img src={banner.card3} alt="card" />
          <img src={banner.card0} alt="card" />
        </div>
      </div>

      {/* transactions */}
      <div className="flex mt-[10%] justify-around mx-[15%] items-center">
        <div className="flex flex-col space-y-5 text-[#1A191E]">
          <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em]">
            {transactions.tag}
          </h5>
          <h1 className="text-[64px] leading-[70.4px] font-medium tracking-[-0.03em] w-[60%]">
            {transactions.heading}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[17.96px] leading-[32.32px] font-medium w-[65%]"
          >
            {transactions.body}
          </p>
          <div
            style={{
              fontFamily: "Inter",
            }}
            className="flex space-x-3"
          >
            <img src={transactions.icon} />
            <p className="text-[18px] leading-[32.4px] font-medium">
              {transactions.featurea}
            </p>
          </div>

          <div
            style={{
              fontFamily: "Inter",
            }}
            className="flex space-x-3"
          >
            <img src={transactions.icon} />
            <p className="text-[18px] leading-[32.4px] font-medium">
              {transactions.featureb}
            </p>
          </div>

          <div
            style={{
              fontFamily: "Inter",
            }}
            className="flex space-x-3"
          >
            <img src={transactions.icon} />
            <p className="text-[18px] leading-[32.4px] font-medium">
              {transactions.featurec}
            </p>
          </div>
        </div>
        <img src={transactions.img} alt="transaction" />
      </div>

      {/* cards */}
      <div className="flex mt-[10%] justify-around mx-[15%] items-center">
        <div className="flex flex-col space-y-5">
          <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em] text-[#1A191E]">
            {cards.tag}
          </h5>
          <h1 className="text-[64px] leading-[70.4px] font-medium tracking-[-0.03em] w-[60%]">
            {cards.heading}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[17.96px] leading-[32.32px] font-medium w-[65%]"
          >
            {cards.body}
          </p>
          <div
            style={{
              fontFamily: "Inter",
            }}
            className="flex space-x-3"
          >
            <img src={cards.icon} />
            <p className="text-[18px] leading-[32.4px] font-medium">
              {cards.featurea}
            </p>
          </div>

          <div
            style={{
              fontFamily: "Inter",
            }}
            className="flex space-x-3"
          >
            <img src={cards.icon} />
            <p className="text-[18px] leading-[32.4px] font-medium">
              {cards.featureb}
            </p>
          </div>

          <div
            style={{
              fontFamily: "Inter",
            }}
            className="flex space-x-3"
          >
            <img src={transactions.icon} />
            <p className="text-[18px] leading-[32.4px] font-medium">
              {cards.featurec}
            </p>
          </div>
        </div>
        <img src={cards.img} alt="transaction" />
      </div>

      {/* all in one */}
      <div className="flex flex-col items-center  mt-[10%] text-[#1A191E] ">
        <h2 className="flex text-[64px] leading-[70.4px] font-medium tracking-[-0.03em]">
          {allInOne.heading}
        </h2>
        <p
          style={{
            fontFamily: "Inter",
          }}
          className="flex text-[20px] text-center  leading-[36px] font-medium w-[30%]"
        >
          {allInOne.body}
        </p>
      </div>

      <div className="flex mt-[5%] justify-center space-x-5 ">
        {/* statistics */}

        <div className="flex flex-col space-y-3 bg-[#F8F8F8]  items-center text-center rounded-[20px]">
          <h1 className="text-[40px] leading-[48px] tracking-[-0.03em] font-medium mt-[10%]">
            {statistics.title}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[18px] leading-[32.4px] font-medium text-[#1a191e] opacity-50 w-[70%]"
          >
            {statistics.body}
          </p>
          <img className="flex pt-[10%]" src={statistics.img} />
        </div>

        {/* cards */}
        <div className="flex flex-col space-y-3 bg-[#F8F8F8]  items-center text-center rounded-[20px]">
          <h1 className="text-[40px] leading-[48px] tracking-[-0.03em] font-medium mt-[10%]">
            {cardDetails.title}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[18px] leading-[32.4px] font-medium text-[#1a191e] opacity-50 w-[70%]"
          >
            {cardDetails.body}
          </p>
          <div className="flex justify-between space-x-5 w-full">
            <img className="flex pt-[10%]" src={cardDetails.img1} />
            <img className="flex pt-[10%]" src={cardDetails.img2} />
            <img className="flex pt-[10%]" src={cardDetails.img3} />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="flex mt-[5%] justify-center space-x-5 ml-[6%] w-[88%]">
        {/* integration */}
        <div className="flex flex-col space-y-3 bg-[#F8F8F8] rounded-[20px] w-[25%]">
          <h1 className="text-[40px] mx-[10%]  leading-[48px] tracking-[-0.03em] font-medium mt-[10%] w-[60%]">
            {integration.title}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[18px] mx-[10%] leading-[32.4px]  font-medium text-[#1a191e] opacity-50 w-[70%]"
          >
            {integration.body}
          </p>
          <div className="flex w-full justify-between space-x-3 pt-[10%]">
            <img className="bg-white rounded-[10px]" src={integration.logo1} />
            <img className="bg-white rounded-[10px] " src={integration.logo2} />
            <img className="bg-white rounded-[10px]" src={integration.logo3} />
          </div>
          <div className="flex w-full justify-between space-x-3 pt-[5%]">
            <img className="bg-white " src={integration.logo4} />
            <img className="bg-white " src={integration.logo5} />
            <img className="bg-white " src={integration.logo6} />
            <img className="bg-white " src={integration.logo7} />
          </div>

          <div className="flex w-full justify-between pt-[5%] pb-[5%] ">
            <img className="bg-white " src={integration.logo8} />
            <img className="bg-white " src={integration.logo9} />
            <img className="bg-white " src={integration.logo10} />
          </div>
        </div>
        {/* savings  */}
        <div className="flex flex-col space-y-3 bg-[#F8F8F8] rounded-[20px] w-[25%]">
          <h1 className="text-[40px] mx-[10%]  leading-[48px] tracking-[-0.03em] font-medium mt-[10%] w-[60%]">
            {savings.title}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[18px]  mx-[10%] leading-[32.4px]  font-medium text-[#1a191e] opacity-50 w-[70%]"
          >
            {savings.body}
          </p>
          <div className="flex justify-between pt-[10%]">
            <div className="ml-[10%] flex flex-col space-y-3 text-[#1A191E]">
              <img src={savings.img1} alt="desktop" />
              <p className="text-[18px]  font-medium  leading-[25.2px] tracking-[-0.03em]">
                {savings.item1}
              </p>
              <span
                style={{
                  fontFamily: "Inter",
                }}
                className="text-[14px] leading-[22.4px] font-medium opacity-50"
              >
                {savings.price1}
              </span>
            </div>
            {/* bike */}
            <div className=" flex flex-col space-y-3 text-[#1A191E]">
              <img src={savings.img2} alt="desktop" />
              <p className="text-[18px]  font-medium  leading-[25.2px] tracking-[-0.03em]">
                {savings.item2}
              </p>
              <span
                style={{
                  fontFamily: "Inter",
                }}
                className="text-[14px] leading-[22.4px] font-medium opacity-50"
              >
                {savings.price1}
              </span>
            </div>
          </div>
        </div>

        {/* integration */}
        <div className="flex flex-col space-y-3 bg-[#F8F8F8] rounded-[20px] w-[25%]">
          <h1 className="text-[40px] mx-[10%]  leading-[48px] tracking-[-0.03em] font-medium mt-[10%] w-[60%]">
            {integration.title}
          </h1>
          <p className="text-[18px] mx-[10%] leading-[32.4px]  font-medium text-[#1a191e] opacity-50 w-[70%]">
            {integration.body}
          </p>
          {/* <div className="flex w-full justify-between pt-[10%]">
            <img
              className="bg-white rounded-[10px] p-4"
              src={integration.logo1}
            />
            <img
              className="bg-white rounded-[10px] p-4"
              src={integration.logo2}
            />
            <img
              className="bg-white rounded-[10px] p-4"
              src={integration.logo3}
            />
          </div> */}
          {/* <div className="flex w-full justify-between pt-[5%]">
            <img className="bg-white p-4" src={integration.logo4} />
            <img className="bg-white p-4" src={integration.logo5} />
            <img className="bg-white p-4" src={integration.logo6} />
            <img className="bg-white p-4" src={integration.logo7} />
          </div> */}

          {/* <div className="flex w-full justify-between pt-[5%] pb-[10%]">
            <img className="bg-white p-4" src={integration.logo8} />
            <img className="bg-white p-4" src={integration.logo9} />
            <img className="bg-white p-4" src={integration.logo10} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
