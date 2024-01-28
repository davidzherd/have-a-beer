import React from "react";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Recomendation from "../../components/Recomendation/Recomendation";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Recomendation />
    </div>
  );
};
export default Home;
