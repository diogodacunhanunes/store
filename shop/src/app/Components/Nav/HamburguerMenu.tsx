"use client";
import Hamburger from "hamburger-react";
import React from "react";

//context
import { useShopContext } from "../../context/ShopContextProvider";

interface Props {
  size: number;
  color: string;
}

export default function HamburguerMenu({ size, color }: Props) {
  const { setToggledHamburguer } = useShopContext();

  return (
    <Hamburger
      size={size}
      color={color}
      onToggle={() => setToggledHamburguer((prev: boolean) => !prev)}
    />
  );
}
