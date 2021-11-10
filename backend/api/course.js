const express = require("express");
const courseServices = require("../models/course-services");
const app = express.Router();

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.get("/:course", async (req, res) => {
  const course = req.params["course"];
  const result = await courseServices.findProfByCourse(course);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ course_list: result });
  }
});

module.exports = app;
