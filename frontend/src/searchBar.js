import React from "react";
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
    <input className={styles.Input} type="submit"/>
  );
}