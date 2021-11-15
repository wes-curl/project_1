import React from 'react';

import styles from "./review.module.css";

function ReviewEntry(props){
    return(
        <div className={styles.reviewEntry}>
            <textarea maxLength="450" className={styles.reviewEntryText} required id="reviewEntry" name="reviewText" placeholder="Enter a review?"></textarea>
        </div>
    );
}

export default ReviewEntry;