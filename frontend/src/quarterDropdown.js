import React from 'react';

import styles from "./review.module.css";

function QuarterDropdown(props){
    return(
        <select className={styles.quarterDropdown} name="term">
            <option>Quarter</option>
            <option>Fall</option>
            <option>Winter</option>
            <option>Spring</option>
            <option>Summer</option>
        </select>
    );
}

export default QuarterDropdown;