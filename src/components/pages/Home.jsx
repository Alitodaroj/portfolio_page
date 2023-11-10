import React from "react";
import "../../App.css";
import About from "../About";
import Skills from "../Skills";
import Contact from "../Contact";
import "bootstrap/dist/css/bootstrap.css";

let Home = () => {
  return (
    <main>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
};

export default Home;
