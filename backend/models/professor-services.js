const mongoose = require('mongoose');
const professor = require('./professor');
const professorModel = require('./professor');

// input - prof object, new rating integer | {0 <= x <= 5}7
async function professorRatingUpdate(prof, newRating) {
    // newAvg = ((oldAvg * OldNumRatings) + newRating)/(OldNumRatings + 1)
    const newNum = (prof.numRatings + 1);
    const newAvg = ((prof.AvgRating * prof.numRatings) + newRating) / newNum;

    // update professor avg rating and numRatings
    // const filter = {name: prof.name};
    // const update = {avgRating : newAvg, numRatings: newNum}
    // await professor.findOneAndUpdate(filter, update);

    return(newNum, newAvg);
}

// input: professor name; Output: professor object
async function findProfByName(prof_name) {
    return await professor.findOne({'name': prof_name});
}

// input: none; output: json array of all professors in container
async function getAllProfessors() {
    const lst = await professor.find();
    console.log(lst)
    return lst
}

exports.findProfByName = findProfByName;
exports.professorRatingUpdate = professorRatingUpdate;
exports.getAllProfessors = getAllProfessors;