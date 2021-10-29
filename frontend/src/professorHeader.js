import React from 'react';
import DataHeader from './dataHeader.js';

function ProfessorHeader(props){
    return(
        <div className="professorHeader">
            <div className='professorImageContainer'>
                <img className='professorImage' src="https://buildyourspechere.com/wp-content/uploads/2020/10/placeholder-image-person-jpg.jpg" alt={props.professor.name} width="500" height="500"/>    
            </div>
            <DataHeader professor={props.professor} postAReview={props.postAReview}/>
        </div>
    );
}

export default ProfessorHeader;