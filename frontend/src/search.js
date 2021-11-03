import polyLogo from "./polylogo.png";
import SearchBar from "./searchBar.js";
import polyDay from "./calpoly.jpg"
import React from "react";


function SearchPage(props) {
  import("./search.css");
  return (
    <div className="searchContainer">
      <img className="polyLogo" src={polyLogo} alt=""></img>
      <img className="polyDay" src={polyDay} alt=""></img>
      <SearchBar />
    </div>
  );
}

export default SearchPage;
