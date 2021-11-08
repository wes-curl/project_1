const express = require('express');
const cors = require('cors');

require('./database/connection')    // connection to database

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

const courseEndpoint = require('./api/course')
const professorEndpoint = require('./api/professor')

app.use('/api/course', courseEndpoint)
app.use('/api/professor', professorEndpoint)

app.listen(port, 'localhost', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});