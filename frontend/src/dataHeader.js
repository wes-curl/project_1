import React from 'react';
import ProfessorName from './professorName';
import ProfessorCourses from './professorCourses';
import SubmitRating from './submitRating';

import styles from "./professorPage.module.css";

function DataHeader(props){
    return(
        <div className={styles.dataHeader}>
            <ProfessorName name={props.professor.name}/>
            <ProfessorCourses courses={props.professor.courses}/>
            <SubmitRating professor={props.professor} postAReview={props.postAReview}/>
        </div>
    );
}

export default DataHeader;