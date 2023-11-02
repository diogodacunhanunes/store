import Image from "next/image";
import React from "react";
import banner_pic from "@/public/images/assets/scandinavian-interior-background.svg";

export default function Banner() {
  return (
    <div className="w-full relative">
      <Image src={banner_pic} className="w-full" alt="banner" priority={true} />
      <div className="absolute top-[15%] right-[10%]  w-[643px] bg-[#FFF3E3] rounded-[10px] md:w-[443px]  [@media(max-width:935px)]:hidden">
        <div className="flex flex-col font-poppins py-14 pl-7 gap-5">
          <h3 className="font-[600] text-[#333333] tracking-[3px]">
            New Arrival
          </h3>
          <h1 className="font-bold text-[52px] text-[#B88E2F] md:text-[32px]">
            Discover Our New Collection
          </h1>
          <p className="font-[500] text-[24px] text-[#333333] md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <div className="bg-[#B88E2F] text-white flex items-center justify-center w-[222px] h-[74px] cursor-pointer md:w-[160px] md:h-[50px] ">
            BUY NOW
          </div>
        </div>
      </div>
    </div>
  );
}
