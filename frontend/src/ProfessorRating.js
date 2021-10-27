import React from 'react';

function ProfessorRating(props){
    return(
        <div className="professorRating">
            {props.review}
        </div>
    );
}

export default ProfessorRating;