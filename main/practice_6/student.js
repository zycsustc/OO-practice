import Person from "../../main/practice_6/person.js";

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+' '+`I am a Student. I am at Class ${this.klass}.`;
    }
}

export default Student;
