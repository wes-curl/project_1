class Professor{
    constructor(name, dept, active){
        this.name = name;
        this.courses = [];
        this.dept = dept
        this.active = active;
        this.pic = null;
        this.num_ratings = 0;
        this.avg_rating = 0;
        this.reviews = [];
    }
}

export default Professor;