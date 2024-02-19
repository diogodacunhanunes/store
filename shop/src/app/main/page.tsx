import React from "react";
import Banner from "../Components/Main/Banner";
import BrowseRange from "../Components/Main/BrowseRange";
import OurProducts from "../Components/Main/OurProducts";
import ShareHashtag from "../Components/Main/ShareHashtag";
import Footer from "../Components/Main/Footer";
import SidePanel from "../Components/Main/SidePanel";

type Props = {
  toggledHamburguer: boolean;
};
export default function MainPage() {
  return (
    <>
      <SidePanel />
      <div className="flex flex-col">
        <Banner />
        <BrowseRange />
        <OurProducts />
        <ShareHashtag />
        <Footer />
      </div>
    </>
  );
}
