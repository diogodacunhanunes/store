import Link from "next/link";
import React from "react";

type Props = {
  toggledHamburguer: boolean;
};

export default function SidePanel({ toggledHamburguer }: Props) {
  return (
    <div
      className={`fixed z-40 top-20 left-0 h-screen w-60 bg-white p-4 transition-transform transform ${
        toggledHamburguer ? "translate-x-0 shadow-xl" : "-translate-x-60"
      }`}
    >
      <div className="flex flex-col gap-5 pt-5">
        <Link href={"/"}>
          <span className="font-poppins">Home</span>
        </Link>
        <div className="border-b-[1px] h-1 w-full border-[#B88E2F]" />
        <Link href={"/"}>Shop</Link>
        <div className="border-b-[1px] h-1 w-full border-[#B88E2F]" />

        <Link href={"/"}>About</Link>
        <div className="border-b-[1px] h-1 w-full border-[#B88E2F]" />

        <Link href={"/"}>Contact</Link>
        <div className="border-b-[1px] h-1 w-full border-[#B88E2F]" />
      </div>
    </div>
  );
}
