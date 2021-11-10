import React from 'react';

import styles from "./review.module.css";

function SubmitButton(props){
    return(
        <input className={styles.submitButton} onClick={props.onClick} type="submit" value="Submit Review"/>
    );
}

export default SubmitButton;