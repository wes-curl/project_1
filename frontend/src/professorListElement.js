import React from "react";
import Professor from "./Professor.js";

function ProfessorListElement(props) {
    
    return (
        <div className="professorListElement">
            {props.professor.name}
            —
            {props.professor.avg_rating}
            —
            <input type="button" value="Submit" onClick={() => log(props.professor.name)} /> 
            <hr/>
        </div>
    );
}

function log(name){
    console.log(name);
}

export default ProfessorListElement;