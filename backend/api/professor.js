const express = require('express');
const professorServices = require('../models/professor-services')
const courseServices = require('../models/course-services')
const app = express.Router();

app.post('/review', async (req, res) => {
    const course = req.body.course;
    const rating = req.body.rating;
    const term = req.body.term;
    const year = req.body.year;
    const comment = req.body.comment;
    
    // if class doens't exist, create new class and add this prof to that list
    const professors = await courseServices.findProfByCourse(course)


    res.send(professors)
})

app.post("/", async (req, res) => {
    console.log(req.body)
    const professor = req.body;
    professor.active = true;

    const existingProfessor = await professorServices.findProfByNameAndDept(professor.name, professor.dept);

    if (existingProfessor == undefined || existingProfessor == null) {

        const newProfessor = await professorServices.addProfessor(professor);

        if (newProfessor)
            res.status(201).send(newProfessor);
        else
            res.status(500).end();
    }
    res.status(202).end();  // Professor already exists in DB
});

module.exports = app;