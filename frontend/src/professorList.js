import React from "react";
import Professor from "./Professor.js";
import ProfessorListElement from "./professorListElement.js";

function ProfessorList(props) {
    var searchBy = "class"; //or professor
    var got = [
        new Professor("Bruno Da Silva", "CSC", true),
        new Professor("Kurt Mammen", "CSC", false),
        new Professor("Christopher Siu", "CSC", true),
        new Professor("Farah Al Nakib", "HIST", true)
    ]; //update to get from backend
    
    got[0].avg_rating = 5.0;
    got[1].avg_rating = 1.0;
    got[2].avg_rating = 4.0;
    got[3].avg_rating = 3.0;

    return (
        <div className="professorList">
            <div className="headerData">
                {"Searching by " + searchBy}
                <hr/>
            </div>
            <form>
                {got.map((prof) => <ProfessorListElement professor={prof} />)}
            </form>
        </div>
    );
}

export default ProfessorList;