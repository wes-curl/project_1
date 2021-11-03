import React from "react";
import Professor from "./Professor.js";
import ProfessorListElement from "./professorListElement.js";

import styles from "./professorList.module.css";

function ProfessorList(props) {
    var professors = props.profs;
    return (
        <div className={styles.professorList}>
            <div className={styles.headerData}>
                {"Searching by " + props.searchBy}
                <hr/>
            </div>
            <form>
                {professors.map((prof) => <ProfessorListElement onClick={props.onClick} professor={prof} />)}
            </form>
        </div>
    );
}

export default ProfessorList;