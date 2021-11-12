const mongoose = require('mongoose');
const CourseSchema = require('./course');
const Connection = require('../database/connection');

async function findProfByCourse(course_name) {
    const courseModel = Connection.getConnection().model("Course", CourseSchema);
    const course = await courseModel.findOne({'name': course_name})
    if (course === null) {
        return course
    }
    return course.professors
}

async function findCourseByCourseName(course_name) {
    const courseModel = Connection.getConnection().model("Course", CourseSchema);
    return await courseModel.findOne({'name': course_name})
}

async function addCourse(course_name, professor) {
    const courseModel = Connection.getConnection().model("Course", CourseSchema);
    try {
        const courseToAdd = new courseModel({
            "name": course_name,
            "professors": [professor]
        })
        const savedCourse = courseToAdd.save()
        return savedCourse
    } catch (error) {
        console.log(error)
        return false
    }
}

async function addProfessor(course_name, professor) {
    try {
        const courseModel = Connection.getConnection().model("Course", CourseSchema);
        const filter = {"name": course_name}
        const update = {$addToSet: {'professors': professor}}
        return await courseModel.findOneAndUpdate(filter, update, { returnOriginal: false });
    } catch (error) {
        console.log(error)
        return false
    }
}

exports.findProfByCourse = findProfByCourse;
exports.findCourseByCourseName = findCourseByCourseName;
exports.addCourse = addCourse;
exports.addProfessor = addProfessor;

