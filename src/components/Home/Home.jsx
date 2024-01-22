import React from "react";
import "./home.css";
import Hero from "../Hero/Hero";
import Recomendation from "../Recomendation/Recomendation";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Recomendation />
    </div>
  );
};
export default Home;
