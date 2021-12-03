import React from 'react';

import styles from "./review.module.css";

function YearEntry(props){
    var toOption = function(X) {
        return <option key={X}>{X}</option>;
    };

    var years = [];

    var firstYear = 2010;
    var lastYear = 2021;
    
    for(var i = firstYear; i <= lastYear; i++){
        years.push(i.toString());
    }

    return(
        <select className={styles.yearEntry} name="year">
            {years.map(toOption)}
        </select>
    );
}

export default YearEntry;