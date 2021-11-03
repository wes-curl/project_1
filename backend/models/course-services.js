const mongoose = require('mongoose');
const Course = require('./course');

async function findProfByCourse(course_name) {
    return await Course.findOne({'name': course_name})
}
//test 2
exports.findProfByCourse = findProfByCourse;