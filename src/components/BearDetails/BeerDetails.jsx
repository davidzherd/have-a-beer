import React, { useState } from "react";
import "./BeerDetails.css";
import closeButton from "../assets/close.png";
const BeerDetails = ({ beer, setState }) => {
  console.log(beer);
  return (
    <div className="modal">
      <div className="justify-center">
        <img className="background" src={beer.image_url && beer.image_url} />
      </div>
      <img
        className="closeModal"
        src={closeButton}
        alt="Close modal"
        onClick={setState}
      />
      <div className="modal-title">
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
      </div>
      <div className="modal-beer-details">
        <p>
          <span className="bold">ABV: </span>
          {beer.abv ? beer.abv : "Not Specified"}
        </p>
        <p>
          <span className="bold">EBC: </span>
          {beer.ebc ? beer.ebc : "Not Specified"}
        </p>
        <p>
          <span className="bold">IBU: </span>
          {beer.ibu ? beer.ibu : "Not Specified"}
        </p>
        <p>
          <span className="bold">PH: </span>
          {beer.ph ? beer.ph : "Not Specified"}
        </p>
        <p>
          <span className="bold">SRM: </span>
          {beer.srm ? beer.srm : "Not Specified"}
        </p>
        <p>
          <span className="bold">Brewers tips: </span>
          {beer.brewers_tips ? beer.brewers_tips : "Not Specified"}
        </p>
      </div>
    </div>
  );
};

export default BeerDetails;
