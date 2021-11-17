import React from 'react';

import styles from "./professorList.module.css";

function AddProfessorForm(props){
    return(
        <form>
            <p>No professors found. Add one?</p>
            <input></input><label>Name:</label>
            <select>
                <option> CSC </option>
                <option> CPE </option>
            </select><label>Department:</label>
        </form>
    );
}

export default AddProfessorForm;