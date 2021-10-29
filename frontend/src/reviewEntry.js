import React from 'react';

function ReviewEntry(props){
    return(
        <div className="reviewEntry">
            <label>Enter a review: </label>
            <textarea id="reviewEntry"></textarea>
        </div>
    );
}

export default ReviewEntry;