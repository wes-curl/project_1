import React from 'react';
import Course from './Course';

function ProfessorCourses(props){
    return(
        <div className="professorCourses">
            {"Teaches " + props.courses.map((course) => course.courseName).join(", ")}
        </div>
    );
}

export default ProfessorCourses;