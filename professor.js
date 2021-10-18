const mongoose = require('mongoose')

const professorSchema = new Mongoose.Schema({
  name: String,
  reviews: [{
    rating: Number,
    comment: String
  }],
  rating: Number,
  count: Number
}, {collection: TBD})

const prefessor = mongoose.model(TBD, professorSchema)
module.exports = professor 
