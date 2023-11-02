import React from "react";

//images
import logo from "@/public/images/logo/Meubel House_Logos-05.svg";
import heart from "@/public/images/icons/icon_heart.svg";
import search from "@/public/images/icons/icon_search.svg";
import user from "@/public/images/icons/icon_user.svg";
import shopping_cart from "@/public/images/icons/icon_shopping_cart.svg";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between mx-10 py-5 font-montesrrat">
      <div className="flex items-end gap-1">
        <Image
          src={logo}
          alt="logo"
          className="[@media(max-width:1028px)]:w-[35px] w-[50px]"
          priority={true}
        />
        <span className="font-bold leading-none text-3xl [@media(max-width:1028px)]:text-xl">
          Furnitore
        </span>
      </div>
      <div className="flex items-end gap-24 [@media(max-width:1028px)]:text-[12px] [@media(max-width:1028px)]:gap-12 [@media(max-width:640px)]:hidden">
        <Link
          href={"/"}
          className="transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F]"
        >
          <span className="font-poppins ">Home</span>
        </Link>

        <Link
          href={"/"}
          className="transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F]"
        >
          Shop
        </Link>
        <Link
          href={"/"}
          className="transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F]"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="transition duration-350 border-b-2 border-transparent hover:border-[#B88E2F]"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-12 [@media(max-width:1028px)]:gap-4">
        <Image
          src={user}
          alt="user"
          className="[@media(max-width:1028px)]:w-[18px]"
        />
        <Image
          src={search}
          alt="search"
          className="[@media(max-width:1028px)]:w-[18px]"
        />
        <Image
          src={heart}
          alt="heart"
          className="[@media(max-width:1028px)]:w-[18px]"
        />
        <Image
          src={shopping_cart}
          alt="shopping_cart"
          className="[@media(max-width:1028px)]:w-[18px]"
        />
      </div>
    </div>
  );
}
