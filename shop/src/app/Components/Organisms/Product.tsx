"use client";
import React from "react";
import Image from "next/image";
import share from "@/public/images/icons/share.svg";
import like from "@/public/images/icons/like.svg";
import { useSession } from "next-auth/react";
import { useShopContext } from "@/app/context/ShopContextProvider";
import { ActionType, ProductType } from "./types";

export default function Product({
  prod,
  setIsOpen,
  setAction,
}: {
  prod: ProductType;
  setIsOpen: (a: boolean) => void;
  setAction: (a: ActionType) => void;
}) {
  const { data: session } = useSession();
  const { setShoppingCartProducts, setIsShoppingCartOpen } = useShopContext();
  return (
    <div className="w-[255px] relative" key={`wrapper_${prod.id}`}>
      <div className="h-[270px] flex flex-col gap-3 justify-center items-center absolute top-0 left-0 w-full bg-[#3A3A3A] bg-opacity-70 z-10 transition-opacity duration-300 opacity-0 hover:opacity-80">
        <div
          className="flex justify-center items-center w-[70%] h-[48px] bg-white opacity-100 text-[#B88E2F] cursor-pointer"
          onClick={() => {
            if (!session) {
              setAction("add to cart");
              setIsOpen(true);
              return;
            }
            setShoppingCartProducts((prev) => {
              if (prev?.find((p) => p.id === prod.id))
                return prev?.map((p) =>
                  p.id === prod.id ? { ...p, quantity: p.quantity + 1 } : p,
                );
              return [
                ...prev,
                {
                  id: prod.id,
                  name: prod.name,
                  price: Number(prod.price),
                  image: prod.image,
                  quantity: 1,
                },
              ];
            });
            setIsShoppingCartOpen(true);
          }}
        >
          Add to cart
        </div>
        <div className="flex flex-row justify-between gap-3">
          <div
            className="flex gap-1 transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            onClick={() => {
              if (!session) {
                setAction("share");
                setIsOpen(true);
              }
            }}
          >
            <Image
              alt="share_icon"
              id="share_icon"
              priority={true}
              src={share}
            />
            <label className="text-white  cursor-pointer" htmlFor="share_icon">
              Share
            </label>
          </div>
          <div
            className="flex gap-1 transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            onClick={() => {
              if (!session) {
                setAction("like");
                setIsOpen(true);
              }
            }}
          >
            <Image alt="like_icon" id="like_icon" priority={true} src={like} />
            <label className="text-white  cursor-pointer" htmlFor="like_icon">
              Like
            </label>
          </div>
        </div>
      </div>
      <div className="relative z-0" id="image_wrapper">
        <Image
          alt="product_image"
          className="relative w-[fit]"
          height={270}
          src={prod.image}
          width={255}
        />
        {(prod.discount && prod.discount.length > 0) || prod.new ? (
          <div
            className={`absolute top-[8%] right-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center items-center ${
              prod.new ? "bg-[#2EC1AC]" : "bg-[#E97171]"
            }`}
          >
            <span className="w-[30px] h-[30px] font-poppins text-[14px] leading-8 text-[#FFFFFF] text-center">
              {prod.new ? "New" : prod.discount + "%"}
            </span>
          </div>
        ) : null}
      </div>
      <div className="bg-[#F4F5F7] px-3 h-[100px] justify-between cursor-pointer">
        <div className="flex h-[100px] py-3 flex-col justify-between">
          <h3 className="font-poppins font-semibold text-[16px] text-[#3A3A3A]">
            {prod.name}
          </h3>
          <span className="font-poppins font-100 text-[12px] text-[#898989]">
            {prod.category}
          </span>
          <div className="flex flex-row gap-5">
            <span className="font-poppins font-semibold text-[14px] text-[#3A3A3A]">
              {prod.price + "€"}
            </span>
            {prod.oldPrice && prod.oldPrice.length > 0 ? (
              <span className="font-poppins font-semibold text-[12px] text-[#B0B0B0] line-through">
                {prod.oldPrice + "€"}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
