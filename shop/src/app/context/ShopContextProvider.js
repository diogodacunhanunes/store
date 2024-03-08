"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getProductsForUser, storeProductsForUser } from "@/utils/utils";

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [toggledHamburguer, setToggledHamburguer] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [shoppingCartNumItems, setShoppingCartNumItems] = useState(0);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const productsShoppingCart = getProductsForUser({
        userEmail: session.user.email,
      });
      setShoppingCartProducts(productsShoppingCart);
      setShoppingCartNumItems(productsShoppingCart?.length);
    }
  }, [session]);

  useEffect(() => {
    storeProductsForUser({
      userEmail: session?.user.email,
      products: shoppingCartProducts,
    });
    setShoppingCartNumItems(
      shoppingCartProducts?.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0)
    );
  }, [shoppingCartProducts, session]);

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
    shoppingCartProducts,
    setShoppingCartProducts,
    isShoppingCartOpen,
    setIsShoppingCartOpen,
  };

  return (
    <ShopContext.Provider value={context}>{children}</ShopContext.Provider>
  );
}

export function useShopContext() {
  return useContext(ShopContext);
}
