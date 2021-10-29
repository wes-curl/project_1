const mongoose = require('mongoose');
const Course = require('./course');

async function getProfessorsByCourse(course_name) {
    return await Course.findOne({'name': course_name})
}