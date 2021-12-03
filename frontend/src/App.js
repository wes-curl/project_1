import SearchPage from "./search";
import ProfessorList from "./professorList.js";
import ProfessorPage from "./professorPage";
import { useState, useEffect } from 'react';
import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from "axios";

function App(props){
   const [searchedProfessors, getSearchedProfessors] = useState([]);
   const [professor, getProfessor] = useState(null);
   const [searchBy, getSearchBy] = useState("");
   const [searchWith, getSearchWith] = useState("");

   function getProfessorsByCourse(course){
      axios.get("http://localhost:5001/api/course/" + course.courseName).then(
         (response) => {
            const names = response.data.course_list;
            var professors = names.map((name) => getProfessorObj(name));
            console.log(professors);
            getSearchedProfessors(professors);
         }
      ).catch((error) => console.log(error));
   }

   function postAReview(review){
      axios.post("http://localhost:5001/api/professor/review", review).then(
         (response) => {
            console.log(response)
         }
      ) 
   }

      
   function postAProfessor(professor){
      console.log("posting prof")
      axios.post("http://localhost:5001/api/professor/professor", professor).then(
         (response) => {
            console.log(response)
         }
      ) 
   }

   async function getProfessorObj(name){
      var ret_value = "error"
      await axios.get("http://localhost:5001/api/professor", { params: { name: name } }).then(
         (response) => {
            const prof_lst = response.data
            for (let i = 0; i < prof_lst.length; i++) {
                  if (prof_lst[i].name === name) {
                     ret_value = prof_lst[i];
                  }
            }
         }
      )
      return ret_value
   }

   function handleListClick(prof){
      getProfessor(prof);
   }

   useEffect(() => {
      var URL = window.location.href.split("/");

      if(URL.length > 1){
         if(URL[3] === "list"){
            
            URL[5] = URL[5].replaceAll("%20", " ");
            
            if(URL[4] === "Class"){
               getProfessorsByCourse(URL[5]);
            } else {
               getProfessorObj(URL[5]).then((P) => handlePO(P));
            }
         }
         if(URL[3] === "professor"){
            URL[4] = URL[4].replaceAll("%20", " ");
            getProfessorObj(URL[4]).then((P) => handleP(P));
         }
      }

      getSearchBy(URL[URL.length - 2]);
      getSearchWith(URL[URL.length - 1]);

   }, []);

   function handlePO(PO){
      if(PO !== "error"){
         getSearchedProfessors([PO])
      }
   }

   function handleP(P){
      if(P !== "error"){
         getProfessor(P);
      }
   }

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
                     <ProfessorPage professor={professor} postAReview={postAReview}/>
                  </Route>
               </Switch>
         </main>
         </BrowserRouter>
      </div>
   );
}

export default App;
