const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  professors: [String],
});

module.exports = courseSchema;