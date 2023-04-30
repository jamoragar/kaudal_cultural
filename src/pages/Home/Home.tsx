import React from "react";
import Herosection from "../../shared/components/Herosection/Herosection";
import Navbar from "../../shared/components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-cover bg-hero-pattern from-orange-600 to-purple-700">
        <Navbar />
        <Herosection />
      </div>
    </>
  );
};

export default Home;
