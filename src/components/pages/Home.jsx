import React from "react";
import "../../App.css";
import About from "../About";
import Skills from "../Skills";
import Contact from "../Contact";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";

let Home = () => {
  return (
    <main>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
      <Navbar />
    </main>
  );
};

export default Home;
