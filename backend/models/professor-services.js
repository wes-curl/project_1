const mongoose = require("mongoose");
const ProfessorSchema = require("./professor");
const Connection = require("../database/connection");

async function findProfessor(name, dept) {
  const professorModel = Connection.getConnection().model(
    "Professor",
    ProfessorSchema
  );
  let result;
  if (name === undefined && dept === undefined) {
    result = await professorModel.find();
  } else if (name && dept === undefined) {
    result = await professorModel.find({ name: name });
  } else if (dept && name === undefined) {
    result = await professorModel.find({ dept: dept });
  } else {
    result = await professorModel.find({ name: name, dept: dept });
  }
  return result;
}

async function addProfessor(professor) {
  const professorModel = Connection.getConnection().model(
    "Professor",
    ProfessorSchema
  );
  try {
    const professorToAdd = new professorModel(professor);
    const savedProfessor = await professorToAdd.save();
    return savedProfessor;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addReview(name, course, rating, term, year, comment) {
  try {
    const professorModel = Connection.getConnection().model(
      "Professor",
      ProfessorSchema
    );
    const filter = { name: name };
    const newCalcs = await professorRatingUpdate(name, rating);
    const update = {
      avgRating: newCalcs[1],
      numRatings: newCalcs[0],
      $push: {
        reviews: {
          course: course,
          rating: rating,
          term: term,
          year: year,
          comment: comment,
        },
      },
    };
    await professorModel.findOneAndUpdate(filter, {
      $addToSet: { courses: course },
    });
    return await professorModel.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

// input - prof object, new rating integer | {0 <= x <= 5}7
async function professorRatingUpdate(prof, newRating) {
  // newAvg = ((oldAvg * OldNumRatings) + newRating)/(OldNumRatings + 1)
  const newNum = prof.numRatings + 1;
  const newAvg = (prof.AvgRating * prof.numRatings + newRating) / newNum;

  // update professor avg rating and numRatings
  // const filter = {name: prof.name};
  // const update = {avgRating : newAvg, numRatings: newNum}
  // await professor.findOneAndUpdate(filter, update);

  return newNum, newAvg;
}

// get all reviews for a professor - return null if professor does not exist
async function getAllReviews(professor) {
  try {
    const professorModel = Connection.getConnection().model(
      "Professor",
      ProfessorSchema
    );
    const professorToFind = await professorModel.findOne({ name: professor });
    if (professorToFind === null) {
      return professorToFind;
    }
    return professorToFind.reviews;
  } catch (error) {
    console.log(error);
    return false;
  }
}

exports.getAllReviews = getAllReviews;
exports.findProfessor = findProfessor;
exports.addProfessor = addProfessor;
exports.professorRatingUpdate = professorRatingUpdate;
