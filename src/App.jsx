import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Slider from "./components/Slider.jsx";
import Stack from "./components/Stack.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <div className="two-column">
        <Stack></Stack>
        <Experience></Experience>
      </div>
    </>
  );
}

export default App;
