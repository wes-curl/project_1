import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DropDown from "./dropdown";
import styles from "./homepage.module.css";

function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
      <form>
      <DropDown />
      {searchBar()}
      {inputSubmit()}
      </form>
    </div>
  );
}

export default SearchBar;

function searchBar(){
  return( <textarea className={styles.textArea}/>);
}

function inputSubmit(){
  return(
    <Link to="/list">
      <input className={styles.Input} type="submit"/>
    </Link>
    
  );
}