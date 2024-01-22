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
  console.log(beerData);

  return (
    <div className="twoColumns">
      <img src={beerData.image_url} alt={beerData.name} className="beerLogo" />
      <div className="beerInfo">
        <p>
          <span className="bold">Name: </span>
          {beerData.name}
        </p>
        <p>
          <span className="bold">PH: </span>
          {beerData.ph}
        </p>
        <p>
          <span className="bold">Description: </span>
          {beerData.description}
        </p>
      </div>
    </div>
  );
}

export default Recomendation;
