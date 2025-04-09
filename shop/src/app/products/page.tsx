"use client";
import React from "react";
import { ProductType } from "../Components/Organisms/types";
import Banner from "../Components/Organisms/Banner";
import Icon from "../Components/Organisms/Icon";
import { useShopContext } from "../context/ShopContextProvider";
import Product from "../Components/Organisms/Product";
import PaginationUI from "../../components/organisms/Pagination";
import { useProducts } from "../hooks/useProducts";
import { SkeletonCard } from "../../components/organisms/SkeletonCard";
import { Skeleton } from "../../components/organisms/Skeleton";
import LoginModal from "../../components/dialogs/LoginModal";

function Title() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold">Products</h1>
      <span className="text-lg font-bold">Home {` > `}Shop</span>
    </div>
  );
}

export default function Products() {
  const { action, setAction, isLoginModalOpen, setIsLoginModalOpen } =
    useShopContext();

  const { products, isLoading, currentPage, setCurrentPage, totalProds } =
    useProducts();

  return (
    <>
      <div>
        <Banner title={<Title />} />
        <div className="w-full h-[100px] bg-[#F9F1E7] flex justify-center items-center">
          <div className="w-full flex gap-8 justify-start items-center mx-32">
            <Icon customStyles="text-lg" icon="filter" label={true} />
            <Icon icon="gridView" />
            <Icon icon="listView" />
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
            ? Array.from({ length: 15 }).map((_, index) => (
                <SkeletonCard key={`prod_skeleton_${index}`} />
              ))
            : products?.map((product: ProductType) => (
                <div className="w-fit" key={`wrapper_${product.id}`}>
                  <Product
                    prod={product}
                    setAction={setAction}
                    setIsOpen={setIsLoginModalOpen}
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
        action={action}
        isOpen={isLoginModalOpen}
        setIsOpen={setIsLoginModalOpen}
      />
    </>
  );
}
