import React from "react";
import Banner from "../Components/Main/Banner";
import BrowseRange from "../Components/Main/BrowseRange";
import OurProducts from "../Components/Main/OurProducts";
import ShareHashtag from "../Components/Main/ShareHashtag";
import SidePanel from "../Components/Main/SidePanel";

export default function MainPage() {
  return (
    <>
      <SidePanel />
      <div className="flex flex-col">
        <Banner />
        <BrowseRange />
        <OurProducts />
        <ShareHashtag />
      </div>
    </>
  );
}
