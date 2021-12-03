import React from 'react';

import styles from "./review.module.css";

function RatingEntry(props){
    function updateSibling(){
        document.getElementById("ratingValueDisplay").innerHTML = document.getElementById("ratingValue").value
    }
    return(
        <div className={styles.ratingEntry}>
            <label className={styles.ratingLabel}>Enter a rating: </label>
            <input className={styles.ratingSlider} type="range" id="ratingValue" name="rating" min="0" max="5" step="1" onInput={updateSibling}></input>
            <label id="ratingValueDisplay" className={styles.ratingValueDisplay}>5.0</label>
        </div>
    );
}

export default RatingEntry;