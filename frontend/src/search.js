import polyLogo from "./polylogo.png";
import SearchBar from "./searchBar.js";
import polyDay from "./calpoly.jpg"
import React from "react";
import styles from "./homepage.module.css";

function SearchPage(props) {
  return (
    <div className= {styles.searchContainer}>
      <h1 className={styles.H1}> Welcome to PolyRatings! </h1>
      <img className={styles.polyLogo} src={polyLogo} alt=""/>
      <img className={styles.polyDay} src={polyDay} alt=""/>
      <SearchBar />
    </div>
  );
}

export default SearchPage;
