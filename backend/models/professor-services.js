const mongoose = require('mongoose');
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


}