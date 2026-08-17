import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  );
}

export default App;
