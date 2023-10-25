import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import About from "./components/About";

let App = ()  => {
  return (
    <main>
      <NavBar></NavBar>
      <About></About>
        <div>
          <h3>My name is Alan Rojas and I am a software engineer interested in making network connections and learning as much about coding as I can. In my previous roles as an educator and corrections officer, I learned valuable methods to tackle unique problems and overcome adversity in a number of difficult situations. I devised how to create unique solutions to unique problems and was pushed to grow as a result of the various situations I faced. My ability to adapt and thrive in a number of different environments has allowed me to excel in a number of roles.</h3>
        </div>
    </main>
  );
}

export default App;
