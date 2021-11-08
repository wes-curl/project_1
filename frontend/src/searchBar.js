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
  return( <textarea> 

  </textarea> 

  );
}

function inputSubmit(){
  return(<div className={styles.submitSearch}>
  <input type="submit"> 
  </input>
  </div>

  );
}