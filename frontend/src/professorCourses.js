import React from 'react';
import styles from "./professorPage.module.css";

function ProfessorCourses(props){
    return(
        <div className={styles.professorCourses}>
            <div className={styles.teaches}>
                {"Teaches: "}
            </div>
            <div className={styles.teachList}>
                {props.courses.map((course) => course.courseName).join(", ")}
            </div>
        </div>
    );
}

export default ProfessorCourses;