import React from "react";
import { Link } from 'react-router-dom';
import Rating from "./Rating.js";

import styles from "./professorList.module.css";

function ProfessorListElement(props) {

    return (
        <div className={styles.professorListElement}>
            <div className={styles.professorName}>{props.professor.name}</div>
            <Rating rating={props.professor.avgRating.toFixed(1)} numRatings={props.professor.numRating}/>
            <Link to={"/professor/"+props.professor.name} className={styles.link}>
            <input className={styles.linkButton} type="button" value="See reviews" onClick={() => props.onClick(props.professor)} /> 
            </Link>
        </div>
    );
}

export default ProfessorListElement;