import React from "react";
import Professor from "./Professor.js";
import ProfessorListElement from "./professorListElement.js";


function ProfessorList(props) {
    
    import("./professorList.css");
    var professors = props.profs;
    return (
        <div className="professorList">
            <div className="headerData">
                {"Searching by " + props.searchBy}
                <hr/>
            </div>
            <form>
                {professors.map((prof) => <ProfessorListElement onClick={props.onClick} professor={prof} />)}
            </form>
        </div>
    );
}

export default ProfessorList;