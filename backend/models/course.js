const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name: String,
  professors: [String]
})

const course = mongoose.model('courses', courseSchema)
module.exports = course 
