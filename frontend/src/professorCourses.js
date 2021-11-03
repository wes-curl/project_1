import React from 'react';
import Course from './Course';
import styles from "./professorPage.module.css";

function ProfessorCourses(props){
    return(
        <div className={styles.professorCourses}>
            {"Teaches " + props.courses.map((course) => course.courseName).join(", ")}
        </div>
    );
}

export default ProfessorCourses;