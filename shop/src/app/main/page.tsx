import React from "react";
import MainPage from "../Components/Main/MainPage";
import { prisma } from "@/lib/prisma";

export default async function Main() {
  const products = await prisma.product.findMany({ take: 8 });

  return <MainPage products={products} />;
}
