import ProfessorHeader from './professorHeader';
import ProfessorReviewList from './professorReviewList';

import "./professorPageScripts.js";
import styles from "./professorPage.module.css";

function ProfessorPage(props){
    var professor = props.professor;

    return(
        <div className={styles.all}>
            <ProfessorHeader professor={professor} postAReview={props.postAReview}/>
            <ProfessorReviewList />
        </div>
    );
}

export default ProfessorPage;