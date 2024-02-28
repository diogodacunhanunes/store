import { products } from "@/db/rawData";

export default async function handler(req: any, res: any) {
  const { page } = req.query;
  const productsResponse = products.slice((page - 1) * 10, page * 10);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  res.status(200).json({ products: productsResponse }); // Example response
}
