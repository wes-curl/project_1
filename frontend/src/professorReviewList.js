import React from 'react';
import Review from './Review.js';
import ReviewContainer from './reviewContainer.js';
import './professorPage.css';

function ProfessorReviewList(props){
    var testReviews = 
        [new Review("fall", 2021, "this is a test review", 4.0, "CSC 307"),
        new Review("fall", 2021, "... I have more things to sayyyyyy", 1.0, "CSC 321"),
        new Review("fall", 2021, "this is another test review", 4.0, "CSC 307"),
        new Review("fall", 2021, "BLAGH BLAGH BLAGH", 3.0, "CSC 349")];
    
    return(
        <div className="professorReviewList">
            {testReviews.map((review) => <ReviewContainer review={review} />)}
            <hr/>
        </div>
    );
}

export default ProfessorReviewList;