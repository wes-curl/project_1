import React from "react";
import Professor from "./Professor.js";
import ProfessorListElement from "./professorListElement.js";

function ProfessorList(props) {
    var professors = props.profs;
    console.log(professors);
    return (
        <div className="professorList">
            <div className="headerData">
                {"Searching by " + props.searchBy}
                <hr/>
            </div>
            <form>
                {professors.map((prof) => <ProfessorListElement professor={prof} />)}
            </form>
        </div>
    );
}

export default ProfessorList;