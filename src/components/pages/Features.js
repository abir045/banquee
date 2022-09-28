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
    instant,
    accounts,
    contact,
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
      <div className="flex mt-[5%] justify-center space-x-5 mx-[6%] w-[88%]">
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
        {/* instant transactions */}
        <div className="flex flex-col space-y-3 bg-[#F8F8F8] rounded-[20px] w-[25%]">
          <h1 className="text-[40px] mx-[10%]  leading-[48px] tracking-[-0.03em] font-medium mt-[10%] w-[60%]">
            {instant.title}
          </h1>
          <p
            style={{
              fontFamily: "Inter",
            }}
            className="text-[18px] mx-[10%] leading-[32.4px]  font-medium text-[#1a191e] opacity-50 w-[70%] pb-[10%]"
          >
            {instant.body}
          </p>

          <div className="flex flex-col space-y-4">
            {/* product row */}
            <div className="flex mx-[10%] space-x-5 items-center bg-white rounded-[10px] py-4 pl-4 pr-6  ">
              <img src={instant.apple.img} />
              <div className="flex flex-col ">
                <h6 className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em]">
                  {instant.apple.title}
                </h6>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[16px] leading-[25.6px] opacity-50"
                >
                  {instant.apple.category}
                </p>
              </div>
              <h6 className="text-[18px] leading-[25.2px] tracking-[-0.03em] ">
                {instant.apple.price}
              </h6>
            </div>
            {/* product row */}
            <div className="flex mx-[10%] space-x-5 items-center bg-white py-4 pl-4 pr-6 rounded-[10px]">
              <img src={instant.amazon.img} />
              <div className="flex flex-col ">
                <h6 className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em]">
                  {instant.amazon.title}
                </h6>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[16px] leading-[25.6px] opacity-50"
                >
                  {instant.amazon.category}
                </p>
              </div>
              <h6 className="text-[18px] leading-[25.2px] tracking-[-0.03em]">
                {instant.amazon.price}
              </h6>
            </div>
            {/* product row */}
            <div className="flex mx-[10%] space-x-5 items-center py-4 pl-4 pr-6 bg-white rounded-[10px]">
              <img src={instant.google.img} />
              <div className="flex flex-col">
                <h6 className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em]">
                  {instant.google.title}
                </h6>
                <p
                  style={{ fontFamily: "Inter" }}
                  className="text-[16px] leading-[25.6px] opacity-50"
                >
                  {instant.google.category}
                </p>
              </div>
              <h6 className="text-[18px] leading-[25.2px] tracking-[-0.03em] ">
                {instant.google.price}
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* accounts  */}
      <div className="flex flex-col items-center  mt-[10%] text-[#1A191E]">
        <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em]">
          {accounts.title}
        </h5>
        <h2 className="text-[64px] leading-[70.4px] font-medium tracking-[-0.03em]">
          {accounts.heading}
        </h2>
        <p
          style={{ fontFamily: "Inter" }}
          className="text-[20px] leading-9  text-center font-medium  w-[30%]"
        >
          {accounts.body}
        </p>
      </div>

      {/* plans */}

      <div className="flex justify-center  mt-[5%] gap-6 w-[70%] mx-[15%]">
        {/* basic */}
        <div className="flex flex-col text-[#1A191E] space-y-[10px] items-center">
          <div className="flex space-x-3">
            <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em]">
              {accounts.basic.title}
            </h5>
            <span className="text-[12px] leading-[21.6px] font-medium text-[#5BB5A2]">
              {accounts.basic.addOn}
            </span>
          </div>
          <h3 className="font-bold text-[40px] leading-10 tracking-[-0.03em]">
            {accounts.basic.price}
          </h3>
          <p
            style={{ fontFamily: "Inter" }}
            className="text-[16px] leading-[25.6px] text-center font-medium w-[60%] opacity-50 "
          >
            {accounts.basic.details}
          </p>
          <img src={accounts.basic.img} alt="card" />
          <button className="text-[15px] leading-[15px] py-3 px-4 bg-[#5bb5a2] rounded-[6px] w-[85%] text-white">
            {accounts.basic.button}
          </button>
        </div>
        {/* premium */}
        <div className="flex flex-col text-[#1A191E] space-y-[10px] items-center">
          <div className="flex space-x-3">
            <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em]">
              {accounts.premium.title}
            </h5>
          </div>
          <div className="flex items-baseline space-x-3">
            <h3 className="font-bold text-[40px] leading-10 tracking-[-0.03em]">
              {accounts.premium.price}
            </h3>
            <span
              style={{ fontFamily: "Inter" }}
              className="text-[16px] leading-[25.6px] font-medium opacity-50"
            >
              {accounts.premium.period}
            </span>
          </div>

          <p
            style={{ fontFamily: "Inter" }}
            className="text-[16px] leading-[25.6px] text-center font-medium w-[60%] opacity-50 "
          >
            {accounts.premium.details}
          </p>
          <img src={accounts.premium.img} alt="card" />
          <button className="text-[15px] leading-[15px] py-3 px-4 bg-[#5bb5a2] rounded-[6px] w-[85%] text-white">
            {accounts.basic.button}
          </button>
        </div>

        {/* gold */}
        <div className="flex flex-col text-[#1A191E] space-y-[10px] items-center">
          <div className="flex space-x-3">
            <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em]">
              {accounts.gold.title}
            </h5>
          </div>
          <div className="flex items-baseline space-x-3">
            <h3 className="font-bold text-[40px] leading-10 tracking-[-0.03em]">
              {accounts.gold.price}
            </h3>
            <span
              style={{ fontFamily: "Inter" }}
              className="text-[16px] leading-[25.6px] font-medium opacity-50"
            >
              {accounts.gold.period}
            </span>
          </div>

          <p
            style={{ fontFamily: "Inter" }}
            className="text-[16px] leading-[25.6px] text-center font-medium w-[60%] opacity-50 "
          >
            {accounts.gold.details}
          </p>
          <img src={accounts.gold.img} alt="card" />
          <button className="text-[15px] leading-[15px] py-3 px-4 bg-[#5bb5a2] rounded-[6px] w-[85%] text-white">
            {accounts.gold.button}
          </button>
        </div>
      </div>

      {/* help */}

      <div className="flex justify-around mt-[15%] text-[#1A191E]">
        <div className="flex flex-col space-y-10">
          <h2 className="text-[64px] leading-[70.4px] tracking-[-0.03em] font-medium">
            {contact.title}
          </h2>

          <div className="flex mt-[10%] gap-[10px] items-center">
            <img src={contact.support.icon} />
            <div className="flex flex-col">
              <h6 className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em]">
                {contact.support.phone}
              </h6>
              <p className="text-[14px] leading-[22.4px] font-medium opacity-50">
                {contact.support.email}
              </p>
            </div>
          </div>

          <div className="flex mt-[10%] gap-[10px] items-center">
            <img src={contact.help.icon} />
            <div className="flex flex-col">
              <h6 className="text-[18px] leading-[25.2px] font-medium tracking-[-0.03em]">
                {contact.help.email}
              </h6>
              <p className="text-[14px] leading-[22.4px] font-medium opacity-50">
                {contact.help.title}
              </p>
            </div>
          </div>

          <div className="flex space-x-3 ">
            <button className="flex text-[18px] leading-[18px] text-[#5bb5a2] font-medium tracking-[-0.03em]">
              {contact.button.title}
            </button>
            <img src={contact.button.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
