class Review{
    constructor(name, term, year, comment, rating, course){
        this.name = name;
        this.term = term;
        this.year = year;
        this.comment = comment;
        this.rating = rating;
        this.course = course;
        /*
        const name = req.body.name;
        const course = req.body.course;
        const rating = req.body.rating;
        const term = req.body.term;
        const year = req.body.year;
        const comment = req.body.comment;
        */
    }
}

export default Review;