import React from "react";
import "./searchResult.css";
function SearchResult(props) {
  const result = props.result;
  return (
    <div className="result">
      <img src={result.image_url} alt={result.name} className="poster" />
      <p className="beer-name">{result.name}</p>
    </div>
  );
}

export default SearchResult;
