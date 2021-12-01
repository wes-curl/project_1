import SearchPage from "./search";
import ProfessorList from "./professorList.js";
import ProfessorPage from "./professorPage";
import { useState, useEffect } from 'react';

import Professor from "./Professor";
import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Course from "./Course";
import axios from "axios";
import Review from "./Review";
import { render } from "@testing-library/react";

import {useHistory} from "react-router-dom";

function App(props){
   const [searchedProfessors, getSearchedProfessors] = useState([]);
   const [professor, getProfessor] = useState(null);
   const [searchBy, getSearchBy] = useState("nothin'");
   const [searchWith, getSearchWith] = useState("nothin'");
   const [name, getName] = useState("nobody'");

   function getProfessorsByCourse(course){
      axios.get("http://localhost:5001/api/course/" + course.courseName).then(
         (response) => {
            const names = response.data.course_list;
            var professors = names.map((name) => getProfessorObj(name));
            getSearchedProfessors(professors);
         }
      ).catch((error) => console.log(error));
   }

   function postAReview(review){
      console.log(review);
      axios.post("http://localhost:5001/api/professor/review", review).then(
         (response) => {
            console.log(response)
         }
      ) 
   }

   function getProfessorsMatching(name){
      const prof_matching = [];
      axios.get("http://localhost:5001/api/professor", { params: { name: name } }).then(
         (response) => {
            const prof_lst = response.data
            for (let i = 0; i < prof_lst.length; i++) {
                  prof_matching.push(prof_lst[i].name);
            }
         }
      )
      return prof_matching
   }
  
   function postAProfessor(professor){
      console.log("posting prof")
      axios.post("http://localhost:5001/api/professor/professor", professor).then(
         (response) => {
            console.log(response)
         }
      ) 
   }

   function getProfessorObj(name){
      // console.log("clear")
      var ret_value = "error"
      axios.get("http://localhost:5001/api/professor", { params: { name: name } }).then(
         (response) => {
            const prof_lst = response.data
            for (let i = 0; i < prof_lst.length; i++) {
                  if (prof_lst[i].name == name) {
                     console.log(prof_lst[i])
                     ret_value = prof_lst[i]
                  }
            }
         }
      )
      return ret_value
   }

   function handleListClick(prof){
      console.log(prof);
      getProfessor(prof);
   }

   useEffect(() => {
      var course = new Course("csc307", []);
      getProfessorsByCourse(course);
      
      var URL = window.location.href.split("/");
      getName(URL[URL.length - 1]);

      getSearchBy(URL[URL.length - 2]);
      getSearchWith(URL[URL.length - 1]);
      console.log("A: " + searchBy);
   }, []);
   
   return (
      <div>
         <BrowserRouter forceRefresh={true}>
         <main>
               <Switch>
                  <Route exact path='/'>
                     <SearchPage/>
                  </Route>

                  <Route path='/list'>
                     <ProfessorList searchBy={searchBy} searchingWith={searchWith} onClick={handleListClick} profs={searchedProfessors} AddProf={postAProfessor}/>
                  </Route>
                           
                  <Route path='/professor'>
                     <ProfessorPage professor={getProfessorObj(name)} postAReview={postAReview}/>
                  </Route>
               </Switch>
         </main>
         </BrowserRouter>
      </div>
   );
}

export default App;