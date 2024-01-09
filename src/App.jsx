import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./components/Routes";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;