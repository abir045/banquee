import React from "react";
import { FeaturesContent } from "../../DataList";

const Features = () => {
  const { banner, transactions, cards } = FeaturesContent;

  return (
    <div>
      <div className="flex flex-col  text-center  pt-[8%] items-center text-[#1A191E] bg-[#E8F2EE]">
        <h5 className="flex text-xl leading-6  font-medium ">{banner.tag}</h5>
        <h1 className="text-[80px] font-medium tracking-[-0.03em]">
          {banner.heading}
        </h1>
        <p className="text-[20px] leading-9 w-[30%]">{banner.body}</p>

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

      {/* mid section */}
      <div className="flex mt-[10%] justify-around mx-[15%] items-center">
        <div className="flex flex-col space-y-5">
          <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em] text-[#1A191E]">
            {transactions.tag}
          </h5>
          <h1 className="text-[64px] leading-[70.4px] font-medium tracking-[-0.03em] w-[60%]">
            {transactions.heading}
          </h1>
          <p className="text-[17.96px] leading-[32.32px] font-medium w-[65%]">
            {transactions.body}
          </p>
          <div className="flex space-x-3">
            <img src={transactions.icon} />
            <p>{transactions.featurea}</p>
          </div>

          <div className="flex space-x-3">
            <img src={transactions.icon} />
            <p>{transactions.featureb}</p>
          </div>

          <div className="flex space-x-3">
            <img src={transactions.icon} />
            <p>{transactions.featurec}</p>
          </div>
        </div>
        <img src={transactions.img} alt="transaction" />
      </div>

      <div className="flex mt-[10%] justify-around mx-[15%] items-center">
        <div className="flex flex-col space-y-5">
          <h5 className="text-[20px] leading-6 font-medium tracking-[-0.03em] text-[#1A191E]">
            {cards.tag}
          </h5>
          <h1 className="text-[64px] leading-[70.4px] font-medium tracking-[-0.03em] w-[60%]">
            {cards.heading}
          </h1>
          <p className="text-[17.96px] leading-[32.32px] font-medium w-[65%]">
            {cards.body}
          </p>
          <div className="flex space-x-3">
            <img src={cards.icon} />
            <p>{cards.featurea}</p>
          </div>

          <div className="flex space-x-3">
            <img src={cards.icon} />
            <p>{cards.featureb}</p>
          </div>

          <div className="flex space-x-3">
            <img src={transactions.icon} />
            <p>{cards.featurec}</p>
          </div>
        </div>
        <img src={cards.img} alt="transaction" />
      </div>
    </div>
  );
};

export default Features;
