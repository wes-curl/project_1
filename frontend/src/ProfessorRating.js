import React from 'react';

function ProfessorRating(props){
    return(
        <div className="professorRating">
            {props.review.toFixed(1)}
        </div>
    );
}

export default ProfessorRating;