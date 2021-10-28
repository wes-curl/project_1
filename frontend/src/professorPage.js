import ProfessorHeader from './professorHeader';
import ProfessorReviewList from './professorReviewList';
import React from 'react';
import react from 'react';
import Professor from './Professor.js';

function ProfessorPage(props){
    //temporary professor object:
    var testProfessor = new Professor("Bruno da Silva", "CSC", true);
    testProfessor.avg_rating = 4.0;
    return(
        <react.Fragment>
            <ProfessorHeader professor={testProfessor}/>
            <ProfessorReviewList />
        </react.Fragment>
    );
}

export default ProfessorPage;