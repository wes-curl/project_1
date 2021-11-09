const mongoose = require('mongoose');
const ProfessorSchema = require('./professor');
const Connection = require('../database/connection');

async function addReview(name, course, rating, term, year, comment) {
    try {
        const filter = {"name": name}
        const newCalcs = await professorRatingUpdate(name, rating)
        const update = {"avgRating": newCalcs[1],
                        "numRatings": newCalcs[0],
                        $push: {'reviews': {
                            'course': course,
                            'rating': rating,
                            'term': term,
                            'year': year,
                            'comment': comment
                        }}}
        await Professor.findOneAndUpdate(filter, update)
    } catch (error) {
        console.log(error)
        return false
      
async function findProfByNameAndDept(professorName, professorDept) {
    const professorModel = Connection.getConnection().model("Professor", ProfessorSchema);
    try {
        returnVal = await professorModel.findOne({'name': professorName, 'dept': professorDept});
        console.log('----findProfByNameAndDept----')
        console.log(returnVal)
        console.log('-----------------------------')
        return returnVal
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

async function addProfessor(professor) {
    const professorModel = Connection.getConnection().model("Professor", ProfessorSchema);
    try {
        const professorToAdd = new professorModel(professor);
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
    const professorModel = Connection.getConnection().model("Professor", ProfessorSchema);
    
    try {
        return await professorModel.find({name: prof_name});
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

// input: none; output: json array of all professors in container
async function getAllProfessors() {
    const professorModel = Connection.getConnection().model("Professor", ProfessorSchema);
    return await professorModel.find();
}
  
exports.findProfByNameAndDept = findProfByNameAndDept;
exports.addProfessor = addProfessor;
exports.findProfByName = findProfByName;
exports.professorRatingUpdate = professorRatingUpdate;
exports.getAllProfessors = getAllProfessors;
exports.addReview = addReview;
