import React from 'react';
import QuarterDropdown from './quarterDropdown';
import YearEntry from './yearEntry';
import RatingEntry from './ratingEntry';
import ReviewEntry from './reviewEntry';
import CourseDropdown from './courseDropdown';
import SubmitButton from './submitButton';
import Review from './Review';

import styles from "./review.module.css";

class SubmitRating extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            professor: props.professor,
            postReview: props.postAReview
        }
    }

    submitReview(event){
        event.preventDefault();
        var term = event.target.term.value;
        var year = event.target.year.value;
        var reviewText = event.target.reviewText.value;
        var rating = event.target.rating.value;
        var course = event.target.course.value;
        var review = new Review(term, year, reviewText, rating, course);
        this.state.postReview(review);
    }

    render(){
        return(
        <div className={styles.submitRating}>
            <form onSubmit={this.submitReview.bind(this)}>
                <ReviewEntry />
                <div className={styles.drops}>
                    <CourseDropdown courses={this.state.professor.courses}/>
                    <QuarterDropdown />
                    <YearEntry />
                </div>
                <RatingEntry />
                <SubmitButton getReview={getReview}/>
            </form>
        </div>);
    }
}



function getReview(){
    return new Review("", 0, "", 0, "");
}

export default SubmitRating;