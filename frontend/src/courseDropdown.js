import react from 'react';
import React from 'react';

import styles from "./review.module.css";

function CourseEntry(props){    
    var toOption = function(X) {
        return <option key={X}>{X}</option>;
    };
    
    return(
        <React.Fragment>
            <input list="courses" name="course" className={styles.courseDropdown} placeholder="Course" required pattern="[a-z]{0,3}[0-9]{0,3}" 
                title="Three lowercase letters followed by three numbers, for example: abc123"/>

            <datalist id="courses">
                {props.courses.map(toOption)}
            </datalist>
        </React.Fragment>
    );
}

export default CourseEntry;