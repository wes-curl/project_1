import SearchPage from "./search";
import ProfessorList from "./professorList.js";
import ProfessorPage from "./professorPage";

import Professor from "./Professor";
import Review from "./Review";

import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

async function getProfessors(){
  try {
     //const response = await axios.post('');
     const response = [
        new Professor("Bruno Da Silva", "CSC", true),
        new Professor("Kurt Mammen", "CSC", false),
        new Professor("Christopher Siu", "CSC", true),
        new Professor("Farah Al Nakib", "HIST", true)
    ];
     return response;
  }
  catch (error) {
     console.log(error);
     return false;
  }
}

async function getProfessor(){
  try {
     //const response = await axios.post('');
     const response = new Professor("Bruno Da Silva", "CSC", true);
     response.reviews = [new Review("Winter", 2015, "this is a test review", 4.0, "CSC 307"),
     new Review("Fall", 2018, "... I have more things to sayyyyyy", 1.0, "CSC 321"),
     new Review("Spring", 2021, "this is another test review", 4.0, "CSC 307"),
     new Review("Fall", 2021, "BLAGH BLAGH BLAGH", 3.0, "CSC 349")];
     
     return response;
  }
  catch (error) {
     console.log(error);
     return false;
  }
}

class App extends React.Component{
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
                       <ProfessorList />
                    </Route>
                             
                    <Route path='/professor/:id'>
                       <ProfessorPage/>
                    </Route>
                 </Switch>
           </main>
           </BrowserRouter>
        </div>
     );
  }
}

export default App;