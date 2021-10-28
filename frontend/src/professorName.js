import React from 'react';

function ProfessorName(props){
    return(
        <div className="professorName">
            {props.name}
        </div>
    );
}

export default ProfessorName;