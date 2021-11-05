import React from "react";
import ProfessorListSection from "./professorListSection";

import styles from "./professorList.module.css";

function ProfessorList(props) {
    var professors = props.profs;
    return (
        <div className={styles.professorList}>
            <div className={styles.headerData}>
                <div className={styles.searchBy}>{"Searching for " + props.searchingWith + " by " + props.searchBy + ":"}</div>
                <div className={styles.numberFound}>{"Found " + professors.length + " results."}</div>
                <hr/>
            </div>
            <form className={styles.form}>
                {professors.map((prof) => <ProfessorListSection onClick={props.onClick} professor={prof} />)}
            </form>
        </div>
    );
}

export default ProfessorList;