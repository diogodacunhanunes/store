import Image from "next/image";
import React from "react";
import banner_pic from "@/public/images/assets/scandinavian-interior-background.svg";

export default function Banner() {
  return (
    <div className="w-full  relative">
      <Image
        src={banner_pic}
        className="w-full object-cover h-[200px] lg:h-[400px] "
        alt="banner"
        priority={true}
      />
    </div>
  );
}
