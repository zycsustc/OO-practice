import Person from "../../main/practice_3/person.js";

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;}
    introduce(){
        return `I am a Student. I am at Class ${this.klass}.`
    }
}
export default Student;

