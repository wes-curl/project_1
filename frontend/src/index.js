import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import App from './App';

import App from "./App.js";
/*
const pagesToUse = [<ProfessorList />, <SearchPage />, <ProfessorPage/>]
var pageOn = 0;


ReactDOM.render(pagesToUse[pageOn], document.getElementById("root"));
*/

ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('root')
 );