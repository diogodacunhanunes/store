"use client";
import React from "react";
import Link from "next/link";
import Product from "../Organisms/Product";
import LoginModal from "../../../components/dialogs/LoginModal";
import { useShopContext } from "@/app/context/ShopContextProvider";

export default function OurProducts({ products }: any) {
  type ProductsType = {
    id: number;
    name: string;
    category: string;
    price: string;
    oldPrice: string;
    discount: string;
    image: string;
    new: boolean;
  };

  const { action, setAction, isLoginModalOpen, setIsLoginModalOpen } =
    useShopContext();

  return (
    <div className="flex flex-col py-10">
      <h1 className="text-[32px] font-bold self-center pb-12">Our Products</h1>
      <div className="self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products?.map((prod: ProductsType) => {
          return (
            <Product
              key={`wrapper_${prod.id}`}
              prod={prod}
              setAction={setAction}
              setIsOpen={setIsLoginModalOpen}
            />
          );
        })}
      </div>
      <Link
        className="flex justify-center items-center border-2 border-[#B88E2F] w-[18%] self-center text-[#B88E2F]  hover:text-white my-12 p-2 cursor-pointer transition duration-300 hover:bg-[#B88E2F] font-semibold text-[16px] transition-none"
        href={"/products"}
      >
        Show More
      </Link>
      <LoginModal
        isOpen={isLoginModalOpen}
        setIsOpen={setIsLoginModalOpen}
        action={action}
      />
    </div>
  );
}
