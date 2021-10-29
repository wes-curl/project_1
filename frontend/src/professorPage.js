import ProfessorHeader from './professorHeader';
import ProfessorReviewList from './professorReviewList';
import React from 'react';
import react from 'react';
import Professor from './Professor.js';
import Course from './Course';

import {
    useParams
  } from "react-router-dom";

import "./professorPageScripts.js";

function ProfessorPage(props){

    //temporary professor object:
    var testProfessor = new Professor("Bruno da Silva", "CSC", true);
    testProfessor.avg_rating = 4.0;
    var TPCourses = [
        new Course("CSC 307", null),
        new Course("CSC 101", null),
        new Course("CSC 357", null)
    ]
    testProfessor.courses = TPCourses;
    
    let { id } = useParams();

    //var prof = getProfessorFrom(id);

    return(
        <react.Fragment>
            <ProfessorHeader professor={testProfessor}/>
            <ProfessorReviewList />
        </react.Fragment>
    );
}

export default ProfessorPage;