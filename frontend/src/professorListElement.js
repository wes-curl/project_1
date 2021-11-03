import React from "react";
import Professor from "./Professor.js";
import { Link } from 'react-router-dom';

import styles from "./professorList.module.css";

function ProfessorListElement(props) {
    
    return (
        <div className={styles.professorListElement}>
            <div className={styles.pprofessorName}>{props.professor.name}</div>
            <div className={styles.pprofessorRating}>{props.professor.avg_rating}</div>
            <Link to="/professor">
            <input type="button" value="See review" onClick={() => props.onClick(props.professor)} /> 
            </Link>
            <hr/>
        </div>
    );
}

function log(name){
    console.log(name);
}

export default ProfessorListElement;