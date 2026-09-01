import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Slider from "./components/Slider.jsx";
import Stack from "./components/Stack.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <Stack></Stack>
    </>
  );
}

export default App;
