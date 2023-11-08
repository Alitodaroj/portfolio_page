import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.css";

let App = () => {
  return (
    <main>
      <NavBar></NavBar>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
};

export default App;
