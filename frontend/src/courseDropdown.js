import React from 'react';

import styles from "./review.module.css";

function CourseDropdown(props){
    var toOption = function(X) {
        return <option key={X}>{X}</option>;
    };
    
    return(
        <select name="course" className={styles.courseDropdown}>
            {props.courses.map(toOption)}
        </select>
    );
}

export default CourseDropdown;