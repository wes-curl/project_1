import React from 'react';

import styles from "./review.module.css";

function CourseEntry(props){    

    var toOption = function(X) {
        return <option key={X}>{X}</option>;
    }

    return(
        <div>
        Example: csc307
        <input list="courses" name="course" className={styles.courseEntry} placeholder="Course name"/>

        <datalist id="courses">
            {props.courses.map(toOption)}
        </datalist>

        </div>
    );
}

export default CourseEntry;