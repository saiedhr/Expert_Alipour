import React, { createContext, useState } from "react";
import BestBotsDB from "../DB/BestBots/BestBotsDB";

export const BestBotsContext = createContext<any[]>([{}]);

export const BestBotsProvider = (props: any) => {
  const [bestBots, setBestBots] = useState(BestBotsDB);

  return (
    <BestBotsContext.Provider value={[bestBots, setBestBots]}>
      {props.children}
    </BestBotsContext.Provider>
  );
};
