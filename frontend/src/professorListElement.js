import React from "react";
import Professor from "./Professor.js";
import { Link } from 'react-router-dom';

function ProfessorListElement(props) {
    
    return (
        <div className="professorListElement">
            {props.professor.name}
            —
            {props.professor.avg_rating}
            —
            <Link to="/professor">
            <input type="button" value="Submit" onClick={() => props.onClick(props.professor)} /> 
            </Link>
            <hr/>
        </div>
    );
}

function log(name){
    console.log(name);
}

export default ProfessorListElement;