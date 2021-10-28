import React from 'react';
import Review from './Review.js';

function ReviewContainer(props){    
    var review = props.review;
    return(
        <React.Fragment>
            <hr/>
            <div className="reviewContainer">
                <div className="courseTermYear">
                    {review.course + " — " + review.term + " " + review.year}
                </div>

                <div className='rating'>
                    {review.rating.toFixed(1)}
                </div>
                
                <p class='reviewText'>{review.review}</p>
            </div>
        </React.Fragment>
    );
}

export default ReviewContainer;