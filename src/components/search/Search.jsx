import React, { useState, useEffect } from "react";
import "./search.css";
import SearchResult from "./SearchResult";

const Search = ({ props }) => {
  let resultsArray = [];
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);
  async function fetchData(searchTerm) {
    const apiUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
    const response = await fetch(apiUrl);
    const results = await response.json();
    setSearchResults(results);
    for (let result in searchResults) {
      resultsArray.push(result);
    }
  }
  const runSearch = () => {
    const searchInput = document.querySelector(".search-input");
    let searchTerm = searchInput.value;
    fetchData(searchTerm);
    searchInput.value = "";
  };
  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          id="search"
          placeholder={props.placeholder}
        />
        <button className="search-btn" onClick={runSearch}>
          Search
        </button>
      </div>
      <div className="results">
        {searchResults.map((result) => (
          <SearchResult result={result} />
        ))}
      </div>
    </div>
  );
};

export default Search;
