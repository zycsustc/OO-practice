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
    assignLeader(stud){
        if(stud.klass.number===this.number){
            this.leader = stud;
        }
        else{
            console.log("It is not one of us.");
        }
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
    appendMember(student){
        student.klass = this;
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

class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader&&this.klass.leader.id===this.id){
            return super.introduce()+' '+`I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        else{
            return super.introduce()+' '+`I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}

// const klass = new Class(2);
// const otherKlass = new Class(3);
// const student = new Student(1, "Jerry", 21, otherKlass);

// console.log(student.klass===otherKlass);
// klass.appendMember(student);
// console.log(student.klass===klass);
export default Class;



