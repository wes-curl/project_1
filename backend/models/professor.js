const mongoose = require("mongoose");

const ProfessorSchema = new mongoose.Schema(
  {
    name: String,
    dept: String,
    courses: [String],
    active: Boolean,
    avgRating: Number,
    numRatings: Number,
    reviews: [
      {
        course: String,
        rating: Number,
        term: String,
        year: Number,
        comment: String,
        upvotes: Number,
        downvotes: Number,
      },
    ],
  },
  { collection: "professors" }
);

//will be adding picture later

//const professor = mongoose.model("Professors", professorSchema)
module.exports = ProfessorSchema;
