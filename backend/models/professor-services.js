const mongoose = require('mongoose');
const Professor = require('./professor');

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
    }
}

exports.addReview = addReview;