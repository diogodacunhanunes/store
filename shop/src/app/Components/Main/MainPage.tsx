import React from "react";
import Banner from "./Banner";
import BrowseRange from "./BrowseRange";
import OurProducts from "./OurProducts";
import ShareHashtag from "./ShareHashtag";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <div className="flex flex-col">
      <Banner />
      <BrowseRange />
      <OurProducts />
      <ShareHashtag />
      <Footer />
    </div>
  );
}
