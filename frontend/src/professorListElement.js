import React from "react";
import Professor from "./Professor.js";
import { Link } from 'react-router-dom';
import Rating from "./Rating.js";

import styles from "./professorList.module.css";

function ProfessorListElement(props) {
    
    return (
        <div className={styles.professorListElement}>
            <div className={styles.professorName}>{props.professor.name}</div>
            <Rating rating={props.professor.avg_rating} numRatings={props.professor.num_ratings}/>
            <Link to="/professor">
            <input className={styles.linkButton} type="button" value="See review" onClick={() => props.onClick(props.professor)} /> 
            </Link>
            <hr/>
        </div>
    );
}

function log(name){
    console.log(name);
}

export default ProfessorListElement;