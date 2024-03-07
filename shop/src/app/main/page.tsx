import React from "react";
import MainPage from "../Components/Main/MainPage";

export default async function Main() {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000/"; // Default to local URL if NEXTAUTH_URL is not set
  const endpoint = "/api/products/main";

  const url = `${baseUrl.replace(/\/$/, "")}${endpoint}`;

  console.log("url", url);

  const productsResp = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  console.log("productsResp", productsResp);

  const products = await productsResp.json();

  return <MainPage products={products} />;
}
