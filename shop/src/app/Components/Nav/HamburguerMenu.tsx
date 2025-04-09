"use client";
import Hamburger from "hamburger-react";
import React from "react";

//context
import { useShopContext } from "../../context/ShopContextProvider";
import { HamburguerProps } from "./types";

export default function HamburguerMenu({ size, color }: HamburguerProps) {
  const { setToggledHamburguer } = useShopContext();

  return (
    <Hamburger
      color={color}
      onToggle={() => setToggledHamburguer((prev: boolean) => !prev)}
      size={size}
    />
  );
}
