import React from 'react';
import styles from "./professorPage.module.css";

function ReviewContainer(props){    
    var review = props.review;
    return(
        <React.Fragment>
            <hr/>
            <div className={styles.reviewContainer}>
                <div className={styles.courseTermYear}>
                    {review.course + " — " + review.term + " " + review.year}
                </div>

                <div className={styles.rating}>
                    {review.rating.toFixed(1)}
                </div>
                
                <p className={styles.reviewText}>{review.comment}</p>
            </div>
        </React.Fragment>
    );
}

export default ReviewContainer;