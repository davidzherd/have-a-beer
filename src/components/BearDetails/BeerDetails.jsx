import React from "react";
import "./BeerDetails.css";
import closeButton from "../assets/close.png";
const BeerDetails = ({ beer, setState }) => {
  return (
    <div className="modal">
      <div className="justify-center">
        <img
          className="background"
          src={beer.image_url && beer.image_url}
          alt="beer"
        />
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
          <span className="bold">ABV (Alcohol by volume): </span>
          {beer.abv ? `${beer.abv}%` : "Not Specified"}
        </p>
        <p>
          <span className="bold">EBC (European Brewery Convention): </span>
          {beer.ebc ? beer.ebc : "Not Specified"}
        </p>
        <p>
          <span className="bold">IBU (International Bitterness Units): </span>
          {beer.ibu ? beer.ibu : "Not Specified"}
        </p>
        <p>
          <span className="bold">pH (Potential of Hydrogen): </span>
          {beer.ph ? beer.ph : "Not Specified"}
        </p>
        <p>
          <span className="bold">SRM (Standard Research Method): </span>
          {beer.srm ? beer.srm : "Not Specified"}
        </p>
        <p>
          <span className="bold">Attenuation Level: </span>
          {beer.attenuation_level
            ? `${beer.attenuation_level}%`
            : "Not specified"}
        </p>
        <p>
          <span className="bold">Brewers tips: </span>
          {beer.brewers_tips ? beer.brewers_tips : "Not Specified"}
        </p>
        <p>
          <span className="bold">Description: </span>
          {beer.description ? beer.description : "Not Specified"}
        </p>
        <p>
          <span className="bold">Food pairings: </span>
          {beer.food_pairing ? beer.food_pairing.join(", ") : "Not Specified"}
        </p>
      </div>
    </div>
  );
};

export default BeerDetails;
