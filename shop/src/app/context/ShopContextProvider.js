"use client";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [toggledHamburguer, setToggledHamburguer] = useState(false);

  const context = { toggledHamburguer, setToggledHamburguer };

  return (
    <ShopContext.Provider value={context}>{children}</ShopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(ShopContext);
}
