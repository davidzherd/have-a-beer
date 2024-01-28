import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./findabeer.css";
import Search from "../../components/search/Search";

const FindABeer = () => {
  return (
    <div className="search-component">
      <h1>Search for a beer</h1>
      <div className="search-box">
        <Search props={{ placeholder: "Search a beer" }} />
      </div>
    </div>
  );
};

export default FindABeer;
