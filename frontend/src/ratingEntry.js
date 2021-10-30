import React from 'react';

function RatingEntry(props){
    return(
        <div className="ratingEntry">
            <label>Enter a rating: </label>
            <input type="range" id="ratingValue" name="rating" min="0" max="5" step="0.1"></input>
            <label id="ratingValueDisplay"></label>
        </div>
    );
}

export default RatingEntry;