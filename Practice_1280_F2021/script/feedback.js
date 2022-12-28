class Feedback{
    constructor(fname, course, feed){
        this.fullName = fname;
        this.course = course;
        this.feedback = feed;
    }

    //method
    fullName(){
        let text = this.firstName + " " + this.lastName;
        return text;
    }
}