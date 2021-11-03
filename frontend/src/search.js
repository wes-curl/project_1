import polyLogo from "./polylogo.png";
import SearchBar from "./searchBar.js";
import polyDay from "./calpoly.jpg"
import React from "react";
import "./homepage.css";

function SearchPage(props) {
  return (
    <div className="searchContainer">
      <h1> Welcome to PolyRatings! </h1>
      <img className="polyLogo" src={polyLogo} alt=""></img>
      <img className="polyDay" src={polyDay} alt=""></img>
      <SearchBar />
    </div>
  );
}

export default SearchPage;
