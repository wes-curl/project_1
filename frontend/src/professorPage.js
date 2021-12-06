import ProfessorHeader from './professorHeader';
import ProfessorReviewList from './professorReviewList';

import "./professorPageScripts.js";
import styles from "./professorPage.module.css";

function ProfessorPage(props){
    var professor = props.professor;

    if(professor === null || professor === undefined){
        return(<div/>);
    }

    return(
        <div className={styles.all}>
            <ProfessorHeader professor={professor} postAReview={props.postAReview}/>
            <ProfessorReviewList reviews={professor.reviews}/>
        </div>
    );
}

export default ProfessorPage;