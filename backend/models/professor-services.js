const mongoose = require('mongoose');
const Professor = require('./professor');

async function addReview(name, course, rating, term, year, comment) {
    try {
        const professor = await Professor.findOne({"name": name})
        const updatedProfessor = professor.reviews.push({
                                    'course': course,
                                    'rating': rating,
                                    'term': term,
                                    'year': year,
                                    'comment': comment
                                })
        const savedProfessor = professor.save()
        return savedProfessor
    } catch (error) {
        console.log(error)
        return false
    }
}

exports.addReview = addReview;