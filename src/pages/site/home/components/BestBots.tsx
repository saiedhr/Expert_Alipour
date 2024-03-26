import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BestBotsContext } from "../../../../contexts/BestBotsContext";

const BestBots = () => {
  let [bestBots, setBestBots] = useContext(BestBotsContext);

  return (
    <>
      <h1 className="text-center text-4xl mb-10 font-medium">بهترین ربات‌ها</h1>
      <div className="flex flex-wrap justify-center">
        {bestBots instanceof Array
          ? bestBots.map((bestBot) => (
              <Link
                to={`/details/${bestBot.Id}`}
                key={bestBot.Id}
                className="max-w-sm rounded overflow-hidden shadow-lg m-3 cursor-pointer"
              >
                <img
                  className="w-full max-h-40 min-w-96"
                  src={bestBot.Img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{bestBot.Title}</div>
                  <p className="text-gray-700 text-base">
                    {bestBot.Description}
                  </p>
                  <p className="text-gray-700 text-base mt-3">
                    {bestBot.Price.toLocaleString("fa", { useGrouping: true })}{" "}
                    تومان
                  </p>
                </div>
              </Link>
            ))
          : null}
      </div>
    </>
  );
};

export default BestBots;
