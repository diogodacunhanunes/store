"use client";
import React, { useState } from "react";
import Banner from "../Components/Organisms/Banner";
import Icon from "../Components/Organisms/Icon";
import { useShopContext } from "../context/ShopContextProvider";
import Product from "../Components/Organisms/Product";
import PaginationUI from "../../components/organisms/Pagination";
import { useQuery } from "react-query";
import { SkeletonCard } from "../../components/organisms/SkeletonCard";
import { Skeleton } from "../../components/organisms/Skeleton";
import LoginModal from "../../components/dialogs/LoginModal";

export default function Products() {
  const { action, setAction, isLoginModalOpen, setIsLoginModalOpen } =
    useShopContext();

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
    }
  );

  const Title = () => (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold">Products</h1>
      <span className="text-lg font-bold">Home {` > `}Shop</span>
    </div>
  );

  return (
    <>
      <div>
        <Banner products title={<Title />} />
        <div className="w-full h-[100px] bg-[#F9F1E7] flex justify-center items-center">
          <div className="w-full flex gap-8 justify-start items-center mx-32">
            <Icon label={true} icon={"filter"} customStyles="text-lg" />
            <Icon icon={"gridView"} />
            <Icon icon={"listView"} />
            <div className="h-9 bg-[#B88E2F] w-[1px]" />
            {isLoading ? (
              <Skeleton className="h-8 w-[200px]" />
            ) : (
              <span className="text-lg align-baseline">{`Showing ${1} - ${15} of ${totalProds}`}</span>
            )}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-[15%] sm:px-24 my-20">
          {isLoading
            ? Array.from({ length: 15 }).map((prod, index) => (
                <SkeletonCard key={`prod_skeleton_${index}`} />
              ))
            : products?.map((product: any) => (
                <div key={`wrapper_${product.id}`} className="w-fit">
                  <Product
                    prod={product}
                    setIsOpen={setIsLoginModalOpen}
                    setAction={setAction}
                  />
                </div>
              ))}
        </div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <PaginationUI
            className="mb-20"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(totalProds / 15)}
          />
        )}
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        setIsOpen={setIsLoginModalOpen}
        action={action}
      />
    </>
  );
}
