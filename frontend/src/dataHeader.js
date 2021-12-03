import React from 'react';
import ProfessorName from './professorName';
import ProfessorCourses from './professorCourses';
import SubmitRating from './submitRating';
import Stars from "./stars.js";

import styles from "./professorPage.module.css";

function DataHeader(props){
    return(
        <div className={styles.dataHeader}>
            <ProfessorName name={props.professor.name}/>
            <ProfessorCourses courses={props.professor.courses}/>
            <Stars value={props.professor.avgRating} width={450} height={90}/>
            <SubmitRating professor={props.professor} postAReview={props.postAReview}/>
        </div>
    );
}

export default DataHeader;