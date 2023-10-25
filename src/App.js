import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import About from "./components/About";

let App = ()  => {
  return (
    <main>
      <NavBar></NavBar>
      <About></About>
    </main>
  );
}

export default App;
