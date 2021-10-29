import React from "react";
import DropDown from "./dropdown";

function SearchBar(props) {
  return (
    <div className="searchBar">
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
  return(<input type="submit"> 
  </input>

  );
}