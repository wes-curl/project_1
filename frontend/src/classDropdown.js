import React from 'react';

function CourseDropdown(props){
    var toOption = function(X) {
        return <option>{X.courseName}</option>;
    };
    
    return(
        <div className="courseDropdown">
            <label>What class did you take? </label>
            <select>
                {props.courses.map(toOption)}
            </select>
        </div>
    );
}

export default CourseDropdown;