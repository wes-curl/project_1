import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import App from './App';
import SearchPage from "./search";
import ProfessorList from "./professorList.js";

const pagesToUse = [<ProfessorList />, <SearchPage />]
var pageOn = 0;


ReactDOM.render(pagesToUse[0], document.getElementById("root"));
