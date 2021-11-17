import react from 'react';
import React from 'react';
import outline from "./outline.png";
import styles from "./stars.module.css";

function Stars(props){

    var style = { "width": props.value * 60 };

    return(
        <div className={styles.stars}>
            <div className={styles.background} ></div>
            <div className={styles.fill} style={style}></div>
            <img className={styles.outline} alt="" src={outline}/>
        </div>
    );
}

export default Stars;