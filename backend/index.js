const express = require('express');
const mongoose = require('mongoose');

require('./database/connection')    // connection to database

const app = express();

const port = 5000;

app.use(express.json());

// app.get('/', (req, res) => {
//     // professors = course_services.getProfessorsByCourse(course)
//     res.send('Hello World!');
// });

// app.get('/api/course/getProfessors', (req, res) => {
//     course = req.body.course;
//     rating = req.body.rating;
//     term = req.body.term;
//     year = req.body.year;
//     comment = req.body.comment;

//     console.log(course)
//     res.send(course)
    
//     // if class doens't exist, create new class and add this prof to that list
//     // professors = course_services.getProfessorsByCourse(course)
//     // res.send(professors)
// })
const courseEndpoint = require('./api/course')
// const professorEndpoint = require('./api/professor.js')

app.use('/api/course', courseEndpoint)
// app.use('/api/professor', professorEndpoint)

app.listen(port, 'localhost', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});