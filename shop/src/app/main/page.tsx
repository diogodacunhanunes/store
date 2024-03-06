import React from "react";
import MainPage from "../Components/Main/MainPage";

export default async function Main() {
  const productsResp = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products/main`,
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  );

  const products = await productsResp.json();

  return <MainPage products={products} />;
}
