const mongoose = require('mongoose');
const Professor = require('./professor');

async function findProfByNameAndDept(professorName, professorDept) {

    return await Professor.findOne({'name': professorName, 'dept': professorDept});
}

async function addProfessor(professor) {

    try {
        const professorToAdd = new Professor(professor);
        const savedProfessor = await professorToAdd.save();
        return savedProfessor;
    } catch (error) {
        console.log(error);
        return false;
    }
}

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
    return await Professor.findOne({'name': prof_name});
}

// input: none; output: json array of all professors in container
async function getAllProfessors() {
    const lst = await Professor.find();
    console.log(lst)
    return lst
}
  
exports.findProfByNameAndDept = findProfByNameAndDept;
exports.addProfessor = addProfessor;
exports.findProfByName = findProfByName;
exports.professorRatingUpdate = professorRatingUpdate;
exports.getAllProfessors = getAllProfessors;