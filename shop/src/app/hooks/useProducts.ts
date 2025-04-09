import { useState } from "react";
import { useQuery } from "react-query";
import { ProductType } from "../Components/Organisms/types";

interface UseProductsReturn {
  products: ProductType[] | undefined;
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalProds: number;
}

export function useProducts(): UseProductsReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProds, setTotalProds] = useState(1);

  const { data: products, isLoading } = useQuery(
    ["products", currentPage],
    async () => {
      const response = await fetch(`/api/products/shop?page=${currentPage}`, {
        method: "GET",
      });
      const data = await response.json();
      setTotalProds(data.totalProds);
      return data.products;
    },
    {
      enabled: !!currentPage,
    },
  );

  return {
    products,
    isLoading,
    currentPage,
    setCurrentPage,
    totalProds,
  };
}
