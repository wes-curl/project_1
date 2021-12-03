import React from 'react';

import styles from "./review.module.css";

function QuarterDropdown(props){
    return(
        <select className={styles.quarterDropdown} name="term">
            <option key="F">Fall</option>
            <option key="W">Winter</option>
            <option key="Sp">Spring</option>
            <option key="Su">Summer</option>
        </select>
    );
}

export default QuarterDropdown;