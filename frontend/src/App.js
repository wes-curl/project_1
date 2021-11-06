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

/*
function getProfessorsByName(name){
  try {
      //const response = await axios.post('');
      const response = [
         new Professor("Bruno Da Silva", "CSC", true),
         new Professor("Kurt Mammen", "CSC", false),
         new Professor("Christopher Siu", "CSC", true),
         //new Professor("Farah Al Nakib", "HIST", true)
      ];
      response[0].avg_rating = 5.0;
      response[1].avg_rating = 1.0;
      response[2].avg_rating = 4.0;
      //response[3].avg_rating = 3.0;
     return response;
  }
  catch (error) {
     console.log(error);
     return false;
  }
}
 const response = [
      new Professor("Bruno Da Silva", "CSC", true),
      new Professor("Kurt Mammen", "CSC", false),
      new Professor("Christopher Siu", "CSC", true),
      new Professor("Farah Al Nakib", "HIST", true)
   ];
   response[0].avg_rating = 5.0;
   response[1].avg_rating = 1.0;
   response[2].avg_rating = 4.0;
   response[3].avg_rating = 3.0;

   response[0].courses = [new Course("CSC 307", [response[0], response[2]]), new Course("CSC 360", response[0])]
   response[1].courses = [new Course("CSC 357", response[1])]
   response[2].courses = [new Course("CSC 307", [response[2], response[0]])]
   response[3].courses = [new Course("HIST 311", response[3])]

   async function getProfessorsByCourse(course){
      try {
         var response = axios.get('http://localhost:5000/api/course/' + course.courseName);
         return response;
      }
      catch (error) {
         console.log(error);
         return false;
      }
   }

   const useProfessorByCourse = (url = 'http://localhost:5000/api/course/', options = null) => {
      const [data, setData] = useState(null);
         useEffect(() => {
            axios.get(url, options)
               .then(res => res.json())
               .then(data => setData(data));
         }, [url, options]);
      return {data}
   }

   function getProfessors(type, data){
      
      var output;
      if(type == "class"){
         data = new Course("csc307", []);
         output = getProfessorsByCourse(data);
         output.then((value) => {
            if(value != undefined && value != null){
               console.log(value.data.course_list);
               return value.data.course_list;
            } else {
               return null;
            }
         }
         );
      } else {
         output = getProfessorsByName(data);
      }
   }

   async function getProfessor(id){
      try {
         const response = new Professor("Bruno Da Silva", "CSC", true);
         return response;
      }
      catch (error) {
         console.log(error);
         return false;
      }
   }

   async function postAReview(review){
      
      console.log("review posted");
      console.log(review);
      try {
         const response = "success";
         return response;
      }
      catch (error) {
         console.log(error);
         return false;
      }
   }

*/
function App(props){
   const [searchedProfessors, getSearchedProfessors] = useState([]);
   const [searchBy, getSearchBy] = useState("");
   const [searchWith, getSearchWith] = useState("");
   const [professor, getProfessor] = useState(null);

   function getProfessorsByCourse(course){
      axios.get("http://localhost:5000/api/course/" + course.courseName).then(
         (response) => {
            const names = response.data.course_list.professors;
            var professors = names.map((name) => getProfessorValues(name));
            getSearchedProfessors(professors);
         }
      ).catch((error) => console.log(error));
   }

   function postAReview(review){

   }

   function getProfessorValues(name){
      const v = new Professor("Bruno Da Silva", "CSC", true);
      v.avg_rating = 5;
      v.courses = [new Course("CSC 307", v)];
      v.num_ratings = 32;
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

   /*
   function handleListClick(professor){
      this.setState({ data: professor}, () => {console.log(this.state);});
   }

   useEffect(() => {
      getAllNotes();
   }, []);

  render() {
     this.state.searchedProfessors = getProfessors(this.state.searchBy, this.state.data);
     return (
        <div>
           <BrowserRouter>
           <main>
                 <Switch>
                    <Route exact path='/'>
                       <SearchPage />
                    </Route>
  
                    <Route path='/list'>
                       <ProfessorList searchBy={this.state.searchBy} searchingWith={this.state.data} onClick={this.handleListClick.bind(this)} profs={this.state.searchedProfessors}/>
                    </Route>
                             
                    <Route path='/professor'>
                       <ProfessorPage professor={this.state.data} postAReview={postAReview}/>
                    </Route>
                 </Switch>
           </main>
           </BrowserRouter>
        </div>
     );
  }
  */
}

export default App;