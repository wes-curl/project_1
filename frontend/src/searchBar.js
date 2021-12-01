import { render } from "@testing-library/react";
import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DropDown from "./dropdown";
import styles from "./homepage.module.css";
import { useHistory } from 'react-router-dom';


function SearchBar(props) {
  function searchBar(){
    return( <textarea id="searchBarText" className={styles.textArea}/>);
  }

  const history = useHistory();

  function linker(){
    var text = getText();
    var type = getType();
    history.push("/list/" + getType() + "/" + getText());
  }

  function getText(){
    if(document.getElementById("searchBarText") == null || document.getElementById("searchBarText").value == undefined){
      return "";
    } 
    return document.getElementById("searchBarText").value;
  }

  function getType(){
    if(document.getElementById("searchBarDropdown") == null || document.getElementById("searchBarDropdown").value == undefined){
      return "";
    } 
    return document.getElementById("searchBarDropdown").value;
  }

  function inputSubmit(){
    return(
        <input className={styles.Input} type="submit" onClick={linker}/>
    );
  }

  return (
    <div className={styles.searchBar}>
      <DropDown />
      {searchBar()}
      {inputSubmit()}
    </div>
  );
}
export default SearchBar;