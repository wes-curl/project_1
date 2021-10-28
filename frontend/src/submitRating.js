import React from 'react';
import QuarterDropdown from './quarterDropdown';
import YearEntry from './yearEntry';
import RatingEntry from './ratingEntry';
import ReviewEntry from './reviewEntry';
import CourseDropdown from './classDropdown';
import SubmitButton from './submitButton';

function SubmitRating(props){
    return(
        <div className="submitRating">
            <form>
                <CourseDropdown courses={props.professor.courses}/>
                <QuarterDropdown />
                <YearEntry />
                <RatingEntry />
                <ReviewEntry />
                <SubmitButton />
            </form>
        </div>
    );
}

export default SubmitRating;