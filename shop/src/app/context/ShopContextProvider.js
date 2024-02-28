"use client";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [toggledHamburguer, setToggledHamburguer] = useState(false);
  const [itemRangeLower, setItemRangeLower] = useState(1);
  const [itemRangeUpper, setItemRangeUpper] = useState(16);
  const [totalItems, setTotalItems] = useState(32);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [action, setAction] = useState("");
  const context = {
    toggledHamburguer,
    setToggledHamburguer,
    itemRangeLower,
    setItemRangeLower,
    itemRangeUpper,
    setItemRangeUpper,
    totalItems,
    setTotalItems,
    action,
    setAction,
    isLoginModalOpen,
    setIsLoginModalOpen,
  };

  return (
    <ShopContext.Provider value={context}>{children}</ShopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(ShopContext);
}
