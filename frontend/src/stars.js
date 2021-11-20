import outline from "./outline.png";
import styles from "./stars.module.css";

function Stars(props){

    var width = props.width;
    var height = props.height;

    var fillStyle = { "width": props.value * width / 5, "height": height};
    var outlineStyle = {"width": width, "height": height};

    return(
        <div className={styles.stars} style={outlineStyle}>
            <div className={styles.background} style={outlineStyle}></div>
            <div className={styles.fill} style={fillStyle}></div>
            <img className={styles.outline} alt="" src={outline} style={outlineStyle}/>
        </div>
    );
}

export default Stars;