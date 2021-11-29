import React from "react";
import ProfessorListSection from "./professorListSection";
import styles from "./professorList.module.css";
import AddProfessorForm from "./AddProfessorForm";

function ProfessorList(props) {
    var professors = props.profs;

    return (
        <div className={styles.professorList}>
            <div className={styles.headerData}>
                <div className={styles.searchBy}>{"Searching for " + props.searchingWith + " by " + props.searchBy + ":"}</div>
                <div className={styles.numberFound}>{"Found " + zeroIfUndefined(professors) + " results."}</div>
                <hr/>
            </div>
            <form className={styles.form}>
                {nothingIfUndefined(professors, props.onClick)}
            </form>
            {formIfNothing(professors, props.AddProf)}
            
        </div>
    );
}

function zeroIfUndefined(professors){
    if(professors === undefined){
        return "-";
    } else {
        return professors.length;
    }
}

function formIfNothing(professors, addProf){
    if(professors === undefined || professors === null || professors.length == 0){
        return <AddProfessorForm AddProf={addProf}/>;
    }
}

function nothingIfUndefined(professors, onClick){
    if(professors === undefined || professors === null){
        return null;
    } else {
        console.log("profs" + professors);
        return professors.map((prof) => <ProfessorListSection onClick={onClick} professor={prof} />);
    }
}

export default ProfessorList;

