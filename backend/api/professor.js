const express = require("express");
const professorServices = require("../models/professor-services");
const courseServices = require("../models/course-services");
const app = express.Router();

app.get("/", async (req, res) => {
  const professorName = req.body.name;
  const professorDept = req.body.dept;

  const professors = await professorServices.findProfessor(
    professorName,
    professorDept
  );

  res.send(professors);
});

app.post("/review", async (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const rating = req.body.rating;
  const term = req.body.term;
  const year = req.body.year;
  const comment = req.body.comment;

  // if class doens't exist, create new class and add this prof to that list
  // if class exists, make sure that prof is known to teach that class
  const professors = await courseServices.findProfByCourse(course);
  if (professors === null) {
    courseServices.addCourse(course, name);
  } else if (professors.filter((prof) => prof == name) == []) {
    courseServices.addProfessor(course, name);
  }

  // add the review under the prefessor
  professorServices.addReview(name, course, rating, term, year, comment);

  res.send("added");
});

app.post("/", async (req, res) => {
  const professor = req.body;
  professor.active = true;

  const existingProfessor = await professorServices.findProfessor(
    professor.name,
    professor.dept
  );

  if (existingProfessor == undefined || existingProfessor == null) {
    const newProfessor = await professorServices.addProfessor(professor);

    if (newProfessor) res.status(201).send(newProfessor);
    else res.status(500).end();
  }
  res.status(202).end(); // Professor already exists in DB
});

app.get("/stars/:professor", async (req, res) => {
  const name = req.params["professor"];
  const prof = await professorServices.findProfessor(name, _undefined);
  if (result === undefined || result === null)
    res.status(404).send("professor not found.");
  else {
    res.send(/* getStars(prof) */);
  }
});

module.exports = app;
