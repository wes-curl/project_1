const express = require('express');
const mongoose = require('mongoose');


require('./database/connection')    // connection to database

const app = express();

const port = 5000;

app.use(express.json());

const courseEndpoint = require('./api/course')
const professorEndpoint = require('./api/professor')

app.use('/api/course', courseEndpoint)
app.use('/api/professor', professorEndpoint)

app.listen(process.env.PORT || port, () => {
    console.log("REST API is listening.");
  });