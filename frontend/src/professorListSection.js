import React from "react";
import ProfessorListElement from "./professorListElement";
import styles from "./professorList.module.css";

function ProfessorListSection(props) {
    
    return (
        <div>
            <ProfessorListElement onClick={props.onClick} professor={props.professor}/>
            <hr className={styles.hr}/>
        </div>
    );
}

export default ProfessorListSection;
            