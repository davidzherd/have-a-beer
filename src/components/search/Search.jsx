import React, { useState } from "react";
import "./search.css";
import SearchResult from "./SearchResult";

const Search = ({ props }) => {
  let resultsArray = [];
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    <p className="errorMessage"></p>
  );
  async function fetchData(searchTerm) {
    const apiUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
    const response = await fetch(apiUrl);
    const results = await response.json();
    if (results.length !== 0) {
      setSearchResults(results);
      for (let result in searchResults) {
        resultsArray.push(result);
      }
    } else {
      setSearchResults([]);
      setErrorMessage(
        <p className="errorMessage">No results found for: {searchTerm}</p>
      );
    }
  }
  const runSearch = () => {
    const searchInput = document.querySelector(".search-input");
    if (searchInput.value !== "") {
      fetchData(searchInput.value);
      searchInput.value = "";
    } else {
      setSearchResults([]);
      setErrorMessage(
        <p className="errorMessage">
          You have to type somthing in the search box!
        </p>
      );
    }
  };
  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          id="search"
          placeholder={props.placeholder}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              runSearch();
            }
          }}
        />
        <button className="search-btn" onClick={runSearch}>
          Search
        </button>
      </div>
      <div className="results">
        {searchResults.length !== 0
          ? searchResults.map((result) => (
              <SearchResult result={result} key={result.id} />
            ))
          : errorMessage}
      </div>
    </div>
  );
};

export default Search;
