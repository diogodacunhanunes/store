"use client";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/Main/MainPage";
import { useState } from "react";
export default function Home() {
  const [toggledHamburguer, setToggledHamburguer] = useState(false);

  return (
    <>
      <NavBar setToggledHamburguer={setToggledHamburguer} />
      <MainPage toggledHamburguer={toggledHamburguer} />
    </>
  );
}
