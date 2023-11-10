import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes }  from "./components/Routes";
import Navbar from "./components/Navbar";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Aside() {
  return <>
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
        </>  
}

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Aside>
         { Aside }
        </Aside>
        <MyRoutes />
      </BrowserRouter>
    );
}

export default App;