
import polyLogo from './polylogo.png';
import SearchBar from './searchBar.js';
import polyNight from './calpolynight.png';
import React from 'react';
import './search.css';

function SearchPage(props){
    return(
        <div className="searchContainer">
            <img className="calpolynight" src={polyNight} alt=""></img>
            <img className="polyLogo" src={polyLogo} alt=""></img>
            <SearchBar />
        </div>
    );
}

export default SearchPage;