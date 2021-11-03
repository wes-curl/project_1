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

async function getAllProfessors() {
    const lst = await Professor.find();
    console.log(lst)
    return lst
}

exports.findProfByNameAndDept = findProfByNameAndDept;
exports.addProfessor = addProfessor;
exports.getAllProfessors = getAllProfessors;