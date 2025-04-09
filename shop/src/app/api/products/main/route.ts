import { NextResponse } from "next/server";
import { getProducts } from "@/app/server/products/getProducts";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}
