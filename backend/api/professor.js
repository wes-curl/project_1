const express = require('express');
const professorServices = require('../models/professor-services')
const courseServices = require('../models/course-services')
const router = express.Router();
const app = express();

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

module.exports = router;