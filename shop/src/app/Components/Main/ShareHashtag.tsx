import React from "react";
import share_hastag from "@/public/images/assets/share_image_hashtag.svg";
import Image from "next/image";

export default function ShareHashtag() {
  return (
    <div className="flex justify-center items-center py-12">
      <Image src={share_hastag} alt="share_hashtag" priority={true} />
    </div>
  );
}
