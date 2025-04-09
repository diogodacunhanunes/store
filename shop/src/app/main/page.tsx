import React from "react";
import MainPage from "../Components/Main/MainPage";
import { getProducts } from "../server/products/getProducts";

export default async function Main() {
  const products = await getProducts();

  const formattedProducts = products.map((product) => ({
    ...product,
    price: product.price.toString(),
    oldPrice: product.oldPrice?.toString() ?? "",
    discount: product.discount?.toString() ?? "",
  }));

  return <MainPage products={formattedProducts} />;
}
