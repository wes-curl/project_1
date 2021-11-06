import ProfessorHeader from './professorHeader';
import ProfessorReviewList from './professorReviewList';
import React from 'react';
import react from 'react';

import "./professorPageScripts.js";


function ProfessorPage(props){
    
    var professor = props.professor; 

    return(
        <react.Fragment>
            <ProfessorHeader professor={professor} postAReview={props.postAReview}/>
            <ProfessorReviewList />
        </react.Fragment>
    );
}

export default ProfessorPage;