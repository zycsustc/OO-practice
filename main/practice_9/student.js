
class Person{
    constructor(id, name, age){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old.`;
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
        else{
            return "It is not one of us.";
        }
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
    appendMember(student){
        student.klass.number = this.number;
    }
}

class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass.leader&&this.klass.leader.id===this.id){
            return super.introduce()+' '+`I'm a Student. I'm Leader of Class ${klass.number}.`;
        }
        else{
            return super.introduce()+' '+`I'm a Student. I'm at Class ${klass.number}.`;
        }
    }
}

