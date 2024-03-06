import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");

  const products = await prisma.product.findMany({
    take: 15,
    skip: (Number(page) - 1) * 15,
  });

  const totalProds = await prisma.product.count();

  return NextResponse.json({ products, totalProds });
}
