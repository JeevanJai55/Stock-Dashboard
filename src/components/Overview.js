import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="absolute left-3 top-3 text-neutral-400 text-lg xl:text-lg 2xl:text-xl ">
        ({symbol})
      </span>
      <div className="w-full h-full flex items-center justify-around m-3">
        <span className="text-xl xl:text-2xl 2xl:text-3xl flex items-center">
          ${price}
          <span className="text-lg xl:text-lg 2xl:text-xl text-neutral-400 m-3">
            {currency}
          </span>
          <span
          className={`text-sm xl:text-sm 2xl:text-lg ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
        </span>
        
      </div>
    </Card>
  );
};

export default Overview;