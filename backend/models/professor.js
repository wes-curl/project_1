const mongoose = require("mongoose");

const professorSchema = new Mongoose.Schema({
  name: String,
  dept: String,
  courses: [String],
  active: Boolean,
  avgRating: Number,
  numRatings: Number,
  reviews: [{
    course: String,
    rating: Number,
    term: String, 
    year: Number,
    comment: String
  }]
})

//will be adding picture later

const prefessor = mongoose.model("Professors", professorSchema)
module.exports = professor 
