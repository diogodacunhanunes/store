"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import { getProductsForUser, storeProductsForUser } from "@/utils/utils";

type ShopContextType = {
  toggledHamburguer: boolean;
  setToggledHamburguer: Dispatch<SetStateAction<boolean>>;
  action: "like" | "share" | "add to cart" | "";
  setAction: Dispatch<SetStateAction<"like" | "share" | "add to cart" | "">>;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  shoppingCartNumItems: number;
  setShoppingCartNumItems: Dispatch<SetStateAction<number>>;
  shoppingCartProducts: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  setShoppingCartProducts: Dispatch<
    SetStateAction<
      Array<{
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
      }>
    >
  >;
  isShoppingCartOpen: boolean;
  setIsShoppingCartOpen: Dispatch<SetStateAction<boolean>>;
};

const defaultContext: ShopContextType = {
  toggledHamburguer: false,
  setToggledHamburguer: () => {},
  action: "",
  setAction: () => {},
  isLoginModalOpen: false,
  setIsLoginModalOpen: () => {},
  shoppingCartNumItems: 0,
  setShoppingCartNumItems: () => {},
  shoppingCartProducts: [],
  setShoppingCartProducts: () => {},
  isShoppingCartOpen: false,
  setIsShoppingCartOpen: () => {},
};

const ShopContext = createContext<ShopContextType>(defaultContext);

type ShopContextProviderProps = {
  children: ReactNode;
};

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [toggledHamburguer, setToggledHamburguer] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [shoppingCartNumItems, setShoppingCartNumItems] = useState(0);
  const [shoppingCartProducts, setShoppingCartProducts] = useState<
    ShopContextType["shoppingCartProducts"]
  >([]);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      const productsShoppingCart = getProductsForUser({
        userEmail: session.user.email,
      });
      setShoppingCartProducts(productsShoppingCart);
      setShoppingCartNumItems(productsShoppingCart?.length || 0);
    }
  }, [session]);

  useEffect(() => {
    if (session?.user?.email) {
      storeProductsForUser({
        userEmail: session.user.email,
        products: shoppingCartProducts,
      });
      setShoppingCartNumItems(
        shoppingCartProducts.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.quantity;
        }, 0),
      );
    }
  }, [shoppingCartProducts, session]);

  const [action, setAction] = useState<"like" | "share" | "add to cart" | "">(
    "",
  );
  const context: ShopContextType = {
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
