import React, { useState, useEffect } from "react";
import "./recomendation.css";

function Recomendation() {
  const [beerData, setBeerData] = useState(null);
  async function fetchData() {
    const apiUrl = "https://api.punkapi.com/v2/beers/random";
    const response = await fetch(apiUrl);
    const randomBeerObject = await response.json();
    setBeerData(randomBeerObject[0]);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (beerData) {
    return (
      <>
        <p className="title">We think we found you a match!</p>
        <div className="twoColumns">
          <img
            src={beerData.image_url}
            alt={beerData.name}
            className="beerLogo"
          />
          <div className="beerInfo">
            <p>
              <span className="bold">Name: </span>
              {beerData.name ? beerData.name : "Not specified"}
            </p>
            <p>
              <span className="bold">Tagline: </span>
              {beerData.tagline ? beerData.tagline : "Not specified"}
            </p>
            <p>
              <span className="bold">Description: </span>
              {beerData.description ? beerData.description : "Not specified"}
            </p>
            <p>
              <span className="bold">pH (Potential of Hydrogen) </span>
              {beerData.ph ? beerData.ph : "Not specified"}
            </p>
            <p>
              <span className="bold">Attenuation Level: </span>
              {beerData.attenuation_level
                ? `${beerData.attenuation_level}%`
                : "Not specified"}
            </p>
            <p>
              <span className="bold">EBC (European Brewery Convention): </span>
              {beerData.ebc ? beerData.ebc : "Not specified"}
            </p>
            <p>
              <span className="bold">SRM (Standard Research Method): </span>
              {beerData.srm ? beerData.srm : "Not specified"}
            </p>
            <p>
              <span className="bold">
                IBU (International Bitterness Units):{" "}
              </span>
              {beerData.ibu ? beerData.ibu : "Not specified"}
            </p>
            <p>
              <span className="bold">We recommand to drink it with: </span>
              {beerData.food_pairing
                ? beerData.food_pairing.join(", ")
                : "Not Specified"}
            </p>
          </div>
        </div>
        <button className="generateBeerBtn" onClick={fetchData}>
          Find me another match!
        </button>
      </>
    );
  } else {
    return <div></div>;
  }
}

export default Recomendation;
