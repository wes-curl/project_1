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

function App(props){
   const [searchedProfessors, getSearchedProfessors] = useState([]);
   const [searchBy, getSearchBy] = useState("");
   const [searchWith, getSearchWith] = useState("");
   const [professor, getProfessor] = useState(null);

   function getProfessorsByCourse(course){
      axios.get("http://localhost:5001/api/course/" + course.courseName).then(
         (response) => {
            const names = response.data.course_list;
            var professors = names.map((name) => getProfessorValues(name));
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

   function getProfessorsMatching(req){
      const prof_matching = [];
      const response = axios.get("http://localhost:5001/api/professor", { params: { name: req.body } })
      // for over all the indices of the response table, and get each name and add it to the prof_matching[]
      for(let i = 0; i < response.length; i++){
         prof_matching.push(response[i].name);
      }
      return prof_matching;
      // const names = response.data.name

   }

   function getProfessorValues(name){
      const v = new Professor("Bruno Da Silva", "CSC", true);
      v.avg_rating = 5;
      v.courses = [new Course("CSC 307", v)];
      v.num_ratings = 4;
      v.reviews = [new Review("fall 2021", 2021, "testing", 5, "CSC 307")];
      return v;
   }

   function handleListClick(prof){
      console.log(prof);
      getProfessor(prof);
   }

   useEffect(() => {
      var course = new Course("csc307", []);
      getProfessorsByCourse(course);
   }, []);

   return (
      <div>
         <BrowserRouter>
         <main>
               <Switch>
                  <Route exact path='/'>
                     <SearchPage />
                  </Route>

                  <Route path='/list'>
                     <ProfessorList searchBy={searchBy} searchingWith={searchWith} onClick={handleListClick} profs={searchedProfessors}/>
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