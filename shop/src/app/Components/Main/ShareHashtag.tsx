import React from "react";
import share_hastag from "@/public/images/assets/share_image_hashtag.svg";
import Image from "next/image";

export default function ShareHashtag() {
  return (
    <div className="flex justify-center items-center py-12 w-full overflow-x-auto">
      <div className="w-full mob:max-w-6xl max-w-full md:max-w-2xl lg:max-w-4xl">
        <Image
          src={share_hastag}
          alt="share_hashtag"
          priority={true}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
