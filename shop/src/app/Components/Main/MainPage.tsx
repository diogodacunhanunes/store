import React from "react";
import Banner from "./Banner";
import BrowseRange from "./BrowseRange";
import OurProducts from "./OurProducts";
import ShareHashtag from "./ShareHashtag";
import Footer from "./Footer";
import SidePanel from "./SidePanel";

type Props = {
  toggledHamburguer: boolean;
};
export default function MainPage({ toggledHamburguer }: Props) {
  return (
    <>
      <SidePanel toggledHamburguer={toggledHamburguer} />
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
