import React from "react";
import Professor from "./Professor.js";
import { Link } from 'react-router-dom';

function ProfessorListElement(props) {
    
    return (
        <div className="professorListElement">
            <div class="professorName">{props.professor.name}</div>
            <div class="professorRating">{props.professor.avg_rating}</div>
            <Link to="/professor">
            <input type="button" value="See review" onClick={() => props.onClick(props.professor)} /> 
            </Link>
            <hr/>
        </div>
    );
}

function log(name){
    console.log(name);
}

export default ProfessorListElement;