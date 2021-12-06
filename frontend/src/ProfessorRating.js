import React from 'react';

import styles from "./professorPage.module.css";

function ProfessorRating(props){
    return(
        <div className={styles.professorRating}>
            {props.review.toFixed(1)}
        </div>
    );
}

export default ProfessorRating;