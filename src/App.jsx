import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Stack from "./components/Stack.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <div className="two-column">
        <Stack></Stack>
        <Experience></Experience>
      </div>
    </>
  );
}

export default App;
