import Image from "next/image";
import React from "react";
import banner_pic_home from "@/public/images/assets/scandinavian-interior-background.svg";
import banner_pic_prod from "@/public/images/assets/products-banner.svg";

export default function Banner({
  homepage = false,
  products = false,
  title,
}: {
  homepage?: boolean;
  products?: boolean;
  title?: React.ReactNode;
}) {
  return (
    <div className="w-full relative">
      <Image
        src={homepage ? banner_pic_home : banner_pic_prod}
        className="w-full object-cover h-[200px] lg:h-[400px] "
        alt="banner"
        priority
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </div>
    </div>
  );
}
