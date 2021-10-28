import React from 'react';
import ProfessorName from './professorName';
import ProfessorCourses from './professorCourses';
import ProfessorRating from './ProfessorRating';

function DataHeader(props){
    return(
        <div className="dataHeader">
            <ProfessorName name={props.professor.name}/>
            <ProfessorCourses courses={props.professor.courses}/>
            <ProfessorRating review={props.professor.avg_rating}/>
        </div>
    );
}

export default DataHeader;