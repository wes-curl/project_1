import React from 'react';
import DataHeader from './dataHeader.js';

import styles from "./professorPage.module.css";

function ProfessorHeader(props){
    
    return(
        <div className={styles.professorHeader}>
            {/*<div className={styles.professorImageContainer}>
                <img className={styles.professorImage} src="https://buildyourspechere.com/wp-content/uploads/2020/10/placeholder-image-person-jpg.jpg" alt={props.professor.name} width="500" height="500"/>    
            </div>*/}
            <DataHeader professor={props.professor} postAReview={props.postAReview}/>
        </div>
    );
}

export default ProfessorHeader;