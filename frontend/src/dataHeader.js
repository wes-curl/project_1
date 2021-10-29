import React from 'react';
import ProfessorName from './professorName';
import ProfessorCourses from './professorCourses';
import ProfessorRating from './ProfessorRating';
import SubmitRating from './submitRating';

function DataHeader(props){
    return(
        <div className="dataHeader">
            <ProfessorName name={props.professor.name}/>
            <ProfessorCourses courses={props.professor.courses}/>
            <ProfessorRating review={props.professor.avg_rating}/>
            <SubmitRating professor={props.professor} postAReview={props.postAReview}/>
        </div>
    );
}

export default DataHeader;