import React from "react";
import logo from "./logo.svg";
import Navbar from "./shared/components/Navbar/Navbar";
import Herosection from "./shared/components/Herosection/Herosection";
import "./App.css";

function App() {
  return (
    <div className="App bg-cover bg-hero-pattern from-orange-600 to-purple-700">
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
