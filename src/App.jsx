import React from "react";
import { MyRoutes }  from "./components/Routes";
import Home from "./components/pages/Home";
import "./App.css";

const App = () => {
  return (
      <>
      <div>
      <Home />
      <MyRoutes />
      </div>
      </>
    );
}

export default App;