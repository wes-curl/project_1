import React from 'react';
import QuarterDropdown from './quarterDropdown';
import YearEntry from './yearEntry';
import RatingEntry from './ratingEntry';
import ReviewEntry from './reviewEntry';
import CourseEntry from './courseDropdown';
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
        var name = this.state.professor.name;
        var term = event.target.term.value;
        var year = event.target.year.value;
        var reviewText = event.target.reviewText.value;
        var rating = event.target.rating.value;
        var course = event.target.course.value.replace(/\s+/g, "").toLowerCase();
        var review = new Review(name, term, year, reviewText, rating, course);
        this.state.postReview(review);
    }

    render(){
        if(this.state.professor === undefined){
            return(<div/>);
        }
        return(
        <div className={styles.submitRating}>
            <form onSubmit={this.submitReview.bind(this)}>
                <div className={styles.sideBy}>
                    <ReviewEntry />
                    <div className={styles.drops}>
                        <CourseEntry courses={this.state.professor.courses}/>
                        <QuarterDropdown />
                        <YearEntry />
                    </div>
                </div>
                <div className={styles.reviewBottom}>
                    <SubmitButton getReview={getReview}/>
                    <RatingEntry />
                </div>
                
            </form>
        </div>);
    }
}



function getReview(){
    return new Review("", 0, "", 0, "");
}

export default SubmitRating;