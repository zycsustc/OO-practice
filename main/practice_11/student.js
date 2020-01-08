//import Person from "../../main/practice_11/person.js";

class Person{
    constructor(id, name, age){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        if(student.klass.number===this.number){
            this.leader = student;
            if(this.listener&&this.listener.isTeaching(student)){
                return `I am ${this.listener.name}. I know ${student.name} become Leader of Class ${this.number}.`
            }
        }
        else{
            console.log("It is not one of us.")
        }
    }
    appendMember(student){
        student.klass.number = this.number;
        if(this.listener&&this.listener.isTeaching(student)){
            return `I am ${this.listener.name}. I know ${student.name} has joined Class ${this.number}.`
        }
    }
    registerAssignLeaderListener(teacher){
        this.listener = teacher;
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
    isIn(student){
        if(student.klass.number===this.number){
            return true;
        }
        else{
            return false;
        }
    }
}

class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce(){
        if(this.klasses&&this.klasses.length){
            let klass_num = '';
            for(let i=0;i<this.klasses.length;i++){
                klass_num += this.klasses[i].number+', '
            }
            klass_num = klass_num.slice(0,klass_num.length-2);
            return super.introduce()+' '+`I am a Teacher. I teach Class ${klass_num}.`;}
        else{
            return super.introduce()+' '+`I am a Teacher. I teach No Class.`;
        }
    }
    isTeaching(student){
        if(this.klasses){
            for(let i=0;i<this.klasses.length;i++){
                if(this.klasses[i].isIn(student)){
                    return true;
                }
            }
            return false;
        }
        else{
            return false;
        }
    }
}


class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader&&this.klass.leader.name===this.name){
            return super.introduce()+' '+`I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        else{
            return super.introduce()+' '+`I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}

// const klass = new Class(2);
// const otherKlass = new Class(3);
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
// const student = new Student(1, "Jerry", 21, otherKlass);
// klass.registerJoinListener(teacher);
// klass.appendMember(student);


// const klass = new Class(2);
// const otherKlass = new Class(3);
// const student = new Student(1, "Jerry", 21, klass);
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
// klass.registerAssignLeaderListener(teacher);
// klass.assignLeader(student);
export default Student;

