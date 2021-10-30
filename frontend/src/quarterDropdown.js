import React from 'react';

function QuarterDropdown(props){
    return(
        <div className="quarterDropdown">
            <label>What quarter did you take the class? </label>
            <select name="term">
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
            </select>
        </div>
    );
}

export default QuarterDropdown;