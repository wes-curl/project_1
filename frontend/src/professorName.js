import React from 'react';

import styles from "./professorPage.module.css";

function ProfessorName(props){
    return(
        <div className={styles.professorName}>
            {props.name}
        </div>
    );
}

export default ProfessorName;