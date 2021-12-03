import React from 'react';
import ReviewContainer from './reviewContainer.js';

function ProfessorReviewList(props){
    var reviews = props.reviews;

    return(
        <div className="professorReviewList" >
            {reviews.map((review, index) => <ReviewContainer key={index} review={review} />)}
            <hr/>
        </div>
    );
}

export default ProfessorReviewList;