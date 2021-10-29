import React from 'react';

function SubmitButton(props){
    return(
        <div className="submitButton">
            <input type="button" value="Submit Review" onClick={props.postAReview}/>
        </div>
    );
}

export default SubmitButton;