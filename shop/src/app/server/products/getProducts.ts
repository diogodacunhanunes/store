import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function getProducts(take: number = 8) {
  // Use unstable_cache to cache the result for 120 seconds (2 minutes)
  return unstable_cache(
    async () => {
      const products = await prisma.product.findMany({ take });
      return products;
    },
    ["main-products", take.toString()], // Cache key that includes the take parameter
    {
      revalidate: 120, // Revalidate every 120 seconds
      tags: ["products"], // Tag for cache invalidation
    },
  )();
}
