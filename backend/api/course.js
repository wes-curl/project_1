const express = require('express');
const courseServices = require('../models/course-services')
const app = express.Router();

app.get('/', (req, res) => {
    res.send("Hello, world")
})

app.get('/getProfessors', (req, res) => {
    const course = req.body.course;
    const rating = req.body.rating;
    const term = req.body.term;
    const year = req.body.year;
    const comment = req.body.comment;

    res.send(course)
    
    // if class doens't exist, create new class and add this prof to that list
    const professors = courseServices.getProfessorsByCourse(course)
    res.send(professors)
})

module.exports = app;