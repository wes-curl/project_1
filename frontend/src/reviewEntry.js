import React from 'react';

function ReviewEntry(props){
    return(
        <div className="reviewEntry">
            <label>Enter a review: </label>
            <textarea id="reviewEntry" name="reviewText"></textarea>
        </div>
    );
}

export default ReviewEntry;