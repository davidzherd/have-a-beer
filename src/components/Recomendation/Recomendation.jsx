import React, { useState, useEffect } from "react";
import "./recomendation.css";

function Recomendation() {
  const [beerData, setBeerData] = useState(null);
  const [foodPairings, setFoodPairings] = useState("");
  async function fetchData() {
    const apiUrl = "https://api.punkapi.com/v2/beers/random";
    const response = await fetch(apiUrl);
    const randomBeerObject = await response.json();
    setBeerData(randomBeerObject[0]);
  }
  const foodPairing = (arrayOfFoods) => {
    let finalString = "";
    const lastIndex = arrayOfFoods.length;
    for (let index = 0; index < lastIndex; index++) {
      if (index < lastIndex - 1) {
        finalString = finalString + `${arrayOfFoods[index]}, `;
      } else {
        finalString = finalString + `${arrayOfFoods[index]}.`;
      }
    }
    setFoodPairings(finalString);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (beerData !== null) {
      foodPairing(beerData.food_pairing);
    }
  }, [beerData]);

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
              <span className="bold">PH: </span>
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
              {foodPairings ? foodPairings : "Not specified"}
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
