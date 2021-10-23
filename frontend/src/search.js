
import polyLogo from './polylogo.png';
import SearchBar from './searchBar.js';
import React from 'react';

function SearchPage(props){
    return(
        <div class="searchContainer">
            <img src={polyLogo} alt=""></img>
            <SearchBar />
        </div>
    );
}

export default SearchPage;