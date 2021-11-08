import React from "react";
import Professor from "./Professor.js";
import { Link } from 'react-router-dom';
import star from "./star.png";
import styles from "./professorList.module.css";

function Rating(props) {
    
    return (
        <div className={styles.rating}>
            <div className={styles.ratingValue}>{props.rating}</div> 
            <div className={styles.stars}>
                <img className={styles.star} src={star} alt=""></img>  
                <img className={styles.star} src={star} alt=""></img>  
                <img className={styles.star} src={star} alt=""></img>  
                <img className={styles.star} src={star} alt=""></img>  
                <img className={styles.star} src={star} alt=""></img>  
            </div> 
            <div className={styles.numberOfRatings}>({props.numRatings} reviews)</div>
        </div>
    );
}

export default Rating;