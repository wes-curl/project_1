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

// input - prof object, new rating integer | {0 <= x <= 5}7
async function professorRatingUpdate(prof, newRating) {
    // newAvg = ((oldAvg * OldNumRatings) + newRating)/(OldNumRatings + 1)
    const newNum = (prof.numRatings + 1);
    const newAvg = ((prof.AvgRating * prof.numRatings) + newRating) / newNum;

    // update professor avg rating and numRatings
    // const filter = {name: prof.name};
    // const update = {avgRating : newAvg, numRatings: newNum}
    // await professor.findOneAndUpdate(filter, update);


}
exports.addReview = addReview;
