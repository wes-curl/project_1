const Course = require('./course');

async function findProfByCourse(course_name) {
  const course = await Course.findOne({ name: course_name });
  if (course === null) {
    return course;
  }
  return course.professors;
}

async function findCourseByCourseName(course_name) {
  return await Course.find({ name: course_name });
}

async function addCourse(course_name, professor) {
  try {
    const courseToAdd = new Course({
      name: course_name,
      professors: [professor],
    });
    const savedCourse = courseToAdd.save();
    return savedCourse;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addProfessor(course_name, professor) {
  try {
    await Course.findOne({ name: course_name }).then((course) => {
      course.professors.append(professor);
      course.save();
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

exports.findProfByCourse = findProfByCourse;
exports.findCourseByCourseName = findCourseByCourseName;
exports.addCourse = addCourse;
exports.addProfessor = addProfessor;
