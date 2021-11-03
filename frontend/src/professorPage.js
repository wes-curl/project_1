import ProfessorHeader from './professorHeader';
import ProfessorReviewList from './professorReviewList';
import React from 'react';
import react from 'react';

import {
    useParams
  } from "react-router-dom";

import "./professorPageScripts.js";


function ProfessorPage(props){
    
    var professor = props.professor; 
    let { id } = useParams();

    return(
        <react.Fragment>
            <ProfessorHeader professor={professor} postAReview={props.postAReview}/>
            <ProfessorReviewList />
        </react.Fragment>
    );
}

export default ProfessorPage;