import React from "react";
import logo from "./logo.svg";
import Navbar from "./shared/components/Navbar/Navbar";
import Herosection from "./shared/components/Herosection/Herosection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
