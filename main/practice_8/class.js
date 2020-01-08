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
        }
    }
    getDisplayName(){
        return `Class ${this.number}`
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
// klass.assignLeader(student);
// console.log(student===klass.leader)
export default Class;
