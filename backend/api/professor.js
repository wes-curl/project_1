const express = require('express');
const professorServices = require('../models/professor-services')
const courseServices = require('../models/course-services')
const app = express.Router();

app.post('/review', async (req, res) => {
    const name = req.body.name;
    const course = req.body.course;
    const rating = req.body.rating;
    const term = req.body.term;
    const year = req.body.year;
    const comment = req.body.comment;
    
    // if class doens't exist, create new class and add this prof to that list
    // if class exists, make sure that prof is known to teach that class
    const professors = await courseServices.findProfByCourse(course)
    if (professors === null) {
        courseServices.addCourse(course, name)
    } else if (professors.filter( (prof) => prof == name) == []) {
        courseServices.addProfessor(course, name)
    }
    
    // add the review under the prefessor
    professorServices.addReview(name, course, rating, term, year, comment)


    res.send("added")
})

module.exports = app;