const Course = require('./course');

async function findProfByCourse(course_name) {
    return await Course.findOne({'name': course_name})
}
//test 3
exports.findProfByCourse = findProfByCourse;