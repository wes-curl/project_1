import SearchPage from "./search";
import ProfessorList from "./professorList.js";
import ProfessorPage from "./professorPage";

import Professor from "./Professor";
import Review from "./Review";

import {useState, useEffect} from 'react';
import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function getProfessorsByName(name){
  try {
      //const response = await axios.post('');
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
     return response;
  }
  catch (error) {
     console.log(error);
     return false;
  }
}

function getProfessorsByClass(className){
   try {
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
      return response;
   }
   catch (error) {
      console.log(error);
      return false;
   }
 }

function getProfessors(type, data){
   var output;
   if(type == "byClass"){
      output = getProfessorsByClass(data);
   } else {
      output = getProfessorsByName(data);
   }
   return output;
 }

 async function getProfessor(id){
   try {
      //const response = await axios.post('');
      const response = new Professor("Bruno Da Silva", "CSC", true);
      return response;
   }
   catch (error) {
      console.log(error);
      return false;
   }
 }

 async function postAReview(review){
   try {
      const response = "success";
      return response;
   }
   catch (error) {
      console.log(error);
      return false;
   }
 }

class App extends React.Component{
   constructor(props) {
      super(props);
      this.state = { searchBy: "class", data: ""};
   }
   
  render() {
     return (
        <div>
           <BrowserRouter>
           <main>
                 <Switch>
                    <Route exact path='/'>
                       <SearchPage />
                    </Route>
  
                    <Route path='/list'>
                       <ProfessorList searchBy={this.state.searchBy} profs={getProfessors(this.state.searchBy, this.state.data)}/>
                    </Route>
                             
                    <Route path='/professor'>
                       <ProfessorPage professor={getProfessor(this.state.data)} postAReview={postAReview}/>
                    </Route>
                 </Switch>
           </main>
           </BrowserRouter>
        </div>
     );
  }
}

export default App;