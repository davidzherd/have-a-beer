import React, { useState } from "react";
import BeerDetails from "../BearDetails/BeerDetails";
import "./searchResult.css";
function SearchResult({ result }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  function openDetails() {
    setDetailsOpen(!detailsOpen);
  }
  return (
    <>
      <div className="details" onClick={openDetails}>
        <img src={result.image_url} alt={result.name} className="poster" />
        <p className="beer-name">{result.name}</p>
      </div>
      {detailsOpen && <BeerDetails beer={result} setState={openDetails} />}
    </>
  );
}

export default SearchResult;
