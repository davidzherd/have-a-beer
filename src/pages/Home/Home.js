import React from "react";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Recomendation from "../../components/Recomendation/Recomendation";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Recomendation />
    </div>
  );
};
export default Home;
