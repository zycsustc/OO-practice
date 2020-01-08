import Person from "../../main/practice_5/person.js";

class Worker extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+' '+`I am a Teacher. I have a job.`;
    }
}

export default Worker;
