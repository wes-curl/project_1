import React from 'react';

function YearEntry(props){
    var toOption = function(X) {
        return <option>{X}</option>;
    };

    var years = [];

    var firstYear = 2010;
    var lastYear = 2021;
    
    for(var i = firstYear; i <= lastYear; i++){
        years.push(i.toString());
    }

    return(
        <div className="yearEntry">
            <label>What year did you take the class? </label>
            <select name="year">
                {years.map(toOption)}
            </select>
        </div>
    );
}

export default YearEntry;