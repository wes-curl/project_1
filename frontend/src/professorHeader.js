import React from 'react';
import DataHeader from './dataHeader.js';

function ProfessorHeader(props){
    return(
        <div className="professorHeader">
            <img src="https://i.redd.it/z8ucjtmg26651.jpg" alt={props.professor.name} width="500" height="500"/>
            <DataHeader professor={props.professor}/>
        </div>
    );
}

export default ProfessorHeader;