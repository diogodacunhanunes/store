import React from "react";
import Banner from "../../Components/Organisms/Banner";
import BrowseRange from "../../Components/Main/BrowseRange";
import OurProducts from "../../Components/Main/OurProducts";
import ShareHashtag from "../../Components/Main/ShareHashtag";
import SidePanel from "../../Components/Main/SidePanel";

export default function MainPage({ products }: any) {
  return (
    <>
      <SidePanel />
      <div className="flex flex-col">
        <Banner homepage />
        <BrowseRange />
        <OurProducts products={products} />
        <ShareHashtag />
      </div>
    </>
  );
}
