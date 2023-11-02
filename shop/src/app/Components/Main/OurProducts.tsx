import { products } from "@/public/rawData";
import Image from "next/image";
import React from "react";
import share from "@/public/images/icons/share.svg";
import compare from "@/public/images/icons/compare.svg";
import like from "@/public/images/icons/like.svg";

export default function OurProducts() {
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

  return (
    <div className="flex flex-col w-full py-10">
      <h1 className="text-[32px] font-bold self-center pb-12">Our Products</h1>
      <div className="container px-[10%] self-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 [@media(max-width:775px)]:grid-cols-1 mob:px-[18%]">
        {products?.map((prod: ProductsType) => {
          return (
            <div
              key={`wrapper_${prod.id}`}
              className="w-[255px] relative group"
            >
              <div className="flex flex-col gap-3 justify-center items-center absolute top-0 left-0 w-full h-full bg-[#3A3A3A] bg-opacity-70 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-80">
                <div className="flex justify-center items-center w-[70%] h-[48px] bg-white opacity-100 text-[#B88E2F] cursor-pointer">
                  Add to cart
                </div>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex gap-1 transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer">
                    <Image
                      id="share_icon"
                      src={share}
                      alt="share_icon"
                      priority={true}
                    />
                    <label
                      htmlFor="share_icon"
                      className="text-white  cursor-pointer"
                    >
                      Share
                    </label>
                  </div>
                  <div className="flex gap-1 transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer">
                    <Image
                      id="compare_icon"
                      src={compare}
                      alt="compare_icon"
                      priority={true}
                    />
                    <label
                      htmlFor="compare_icon"
                      className="text-white  cursor-pointer"
                    >
                      Compare
                    </label>
                  </div>
                  <div className="flex gap-1 transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer">
                    <Image
                      id="like_icon"
                      src={like}
                      alt="like_icon"
                      priority={true}
                    />
                    <label
                      htmlFor="like_icon"
                      className="text-white  cursor-pointer"
                    >
                      Like
                    </label>
                  </div>
                </div>
              </div>
              <div id="image_wrapper" className="relative z-0">
                <Image
                  src={prod.image}
                  className="relative w-[fit]"
                  alt="product_image"
                />
                {(prod.discount?.length > 0 || prod.new) && (
                  <div
                    className={`absolute top-[8%] right-[8%] w-[35px] h-[35px] rounded-[50%] flex justify-center items-center ${
                      prod.new ? "bg-[#2EC1AC]" : "bg-[#E97171]"
                    }`}
                  >
                    <span className="w-[30px] h-[30px] font-poppins text-[14px] leading-8 text-[#FFFFFF]">
                      {prod.new ? "New" : prod.discount}
                    </span>
                  </div>
                )}
              </div>
              <div className="bg-[#F4F5F7] px-3 h-[100px] justify-between">
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
                    {prod.oldPrice?.length > 0 && (
                      <span className="font-poppins font-semibold text-[12px] text-[#B0B0B0] line-through">
                        {prod.oldPrice + "€"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center border-2 border-[#B88E2F] w-[18%] self-center text-[#B88E2F]  hover:text-white my-12 p-2 cursor-pointer transition duration-300 hover:bg-[#B88E2F]">
        <p className="font-semibold text-[16px] transition-none">Show More</p>
      </div>
    </div>
  );
}
