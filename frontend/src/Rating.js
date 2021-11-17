import React from "react";
import Professor from "./Professor.js";
import { Link } from 'react-router-dom';
import star from "./star.png";
import Stars from "./stars.js";
import styles from "./professorList.module.css";

function Rating(props) {
    
    return (
        <div className={styles.rating}>
            <div className={styles.ratingValue}>{props.rating}</div> 
            <Stars value={props.rating}/>
            <div className={styles.numberOfRatings}>({props.numRatings} reviews)</div>
        </div>
    );
}

export default Rating;