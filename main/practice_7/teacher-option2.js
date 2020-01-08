

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
}

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+' '+`I am a Student. I am at Class ${this.klass.number}.`;
    }
}

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+' '+`I am a Teacher. I teach Class ${this.klass.number}.`;}
        else{
            return super.introduce()+' '+`I am a Teacher. I teach No Class.`;
        }
    }
    introduceWith(student){
        if(!this.klass){
            return super.introduce()+' '+`I am a Teacher. I don't teach ${student.name}.`;
        }
        if(student.klass.number===this.klass.number){
            return super.introduce()+' '+`I am a Teacher. I teach ${student.name}.`;
        }
        else{
            return super.introduce()+' '+`I am a Teacher. I don't teach ${student.name}.`;
        }
    }
}

export default Teacher;
