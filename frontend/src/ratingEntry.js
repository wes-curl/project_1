import React from 'react';

import styles from "./review.module.css";

function RatingEntry(props){
    return(
        <div className={styles.ratingEntry}>
            <label className={styles.ratingLabel}>Enter a rating: </label>
            <input className={styles.ratingSlider} type="range" id="ratingValue" name="rating" min="0" max="5" step="0.1"></input>
            <label id="ratingValueDisplay"></label>
        </div>
    );
}

export default RatingEntry;