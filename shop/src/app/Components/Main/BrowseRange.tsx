import Image from "next/image";
import React from "react";
import bedroom_browse from "@/public/images/assets/bedroom_browse.svg";
import living_browse from "@/public/images/assets/living_browse.svg";
import dinning_browse from "@/public/images/assets/dinnig_browse.svg";

export default function BrowseRange() {
  type ImageAndTextProps = {
    text: string;
    image: string;
  };
  const ImageAndText: React.FC<ImageAndTextProps> = ({ text, image }) => {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={image}
          alt="living_browse"
          className="rounded-lg w-96 md:w-72"
          priority={true}
        />
        <span className="text-[16px] font-semibold">{text}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <h5 className="text-[16px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h5>
      </div>
      <div className="flex justify-evenly gap-5 mob:gap-2 mob:px-4">
        <ImageAndText image={dinning_browse} text={"Dinning"} />
        <ImageAndText image={living_browse} text={"Living"} />
        <ImageAndText image={bedroom_browse} text={"Bedroom"} />
      </div>
    </div>
  );
}
