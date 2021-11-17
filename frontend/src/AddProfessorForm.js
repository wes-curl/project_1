import React from 'react';
import Professor from './Professor';

import styles from "./professorList.module.css";

class AddProfessorForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            addProfessor: props.AddProf
        }
    }

    addProfessorEvent(event){
        var name = event.target.name.value;
        var dept = event.target.dept.value;
        var professor = new Professor(name, dept, true)

        this.addProfessor(professor);
    }

    render(){
        return(
            <form className={styles.AddProfessorForm} onSubmit={this.addProfessorEvent.bind(this)}>
                <p>No professors found. Add one?</p>
                <div className={styles.nameLabel}>
                    <label>Name:</label><input name="name"></input>
                </div>
                <div className={styles.department}>
                    <label>Department:</label><select name="dept">
                        <option> CSC </option>
                        <option> CPE </option>
                    </select>
                </div>
                <input type="submit" className={styles.addProfessorButton} value="Submit professor"/>
                
            </form>
        );
    }
}

export default AddProfessorForm;