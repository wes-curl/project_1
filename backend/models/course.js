const mongoose = require('mongoose')

const courseSchema = new Mongoose.Schema({
  name: String,
  professors: [String]
}, {collection: TBD})

const course = mongoose.model(TBD, courseSchema)
module.exports = course 
