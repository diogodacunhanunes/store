import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full border-t-[1px]">
      <div className="w-full px-[15%] pt-20 flex flex-row">
        <div className="w-[40%]  flex flex-col gap-10">
          <h1 className="font-bold text-[24px]">Furnitore.</h1>
          <span className="font-300 text-[16px] text-[#9F9F9F]">
            400 University Drive Suite <br /> 200 Coral Gables,
            <br /> FL 33134 USA
          </span>
        </div>
        <div className="w-[60%]  flex flex-col gap-10 pr-[5%]">
          <div className="text-[#9F9F9F] text-300 grid grid-cols-3">
            <p>Links</p>
            <p>Help</p>
            <p>Newsletter</p>
          </div>
          <div className="text-[#000000] text-300 grid grid-cols-3">
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Payment Options
            </Link>
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Subscribe
            </Link>
          </div>
          <div className="text-[#000000] text-300 grid grid-cols-3">
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Shop
            </Link>
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Returns
            </Link>
          </div>
          <div className="text-[#000000] text-300 grid grid-cols-3">
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Privacy Policies
            </Link>
          </div>
          <div className="text-[#000000] text-300 grid grid-cols-3">
            <Link
              href={"/"}
              className="w-fit transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F] cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] h-1 mt-12" />
      <div className="w-full px-[15%] pb-[50px] my-[50px]">
        <span className="text-[16px]">2023 Furnitore. All rights reverved</span>
      </div>
    </div>
  );
}
