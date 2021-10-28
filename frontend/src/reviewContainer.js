import React from 'react';
import Review from './Review.js';

function ReviewContainer(props){    
    var review = props.review;
    return(
        <div className="reviewContainer">
            <hr/>

            <div className="courseTermYear">
                {review.course}
                {review.term}
                {review.year}
            </div>

            <div className='rating'>
                {review.rating}
            </div>
            
            <p class='reviewText'>{review.review}</p>
        </div>
    );
}

export default ReviewContainer;