"use client";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [toggledHamburguer, setToggledHamburguer] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [shoppingCartNumItems, setShoppingCartNumItems] = useState(0);

  const [action, setAction] = useState("");
  const context = {
    toggledHamburguer,
    setToggledHamburguer,
    action,
    setAction,
    isLoginModalOpen,
    setIsLoginModalOpen,
    shoppingCartNumItems,
    setShoppingCartNumItems,
  };

  return (
    <ShopContext.Provider value={context}>{children}</ShopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(ShopContext);
}
