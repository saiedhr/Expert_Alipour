import { createContext } from "react";

export const FooterRefContext = createContext<any[]>([{}]);

export const FooterRefProvider = (props: any) => {
  return (
    <FooterRefContext.Provider value={[]}>
      {props.children}
    </FooterRefContext.Provider>
  );
};
