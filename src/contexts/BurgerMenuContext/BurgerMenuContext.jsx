import React from "react";
import { createContext, useState } from "react";

export const BurgerMenuContext = createContext({ active: "default" });

const BurgerMenuContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  const onClose = () => {
    setActive(false);
  };
  return (
    <BurgerMenuContext.Provider value={{ active, onClick, onClose }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export default BurgerMenuContextProvider;
