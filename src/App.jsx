import React from "react";
import { BrowserRouter as Router }  from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
      <>
      <Router>
          <Navbar />
          <Home />
      </Router>
      </>
    );
}

export default App;