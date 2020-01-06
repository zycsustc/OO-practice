class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return `I'm a student. I'm at Class ${this.klass}.`
    }
}

class Worker extends Person{
    constructor(name, age){
        super(name, age);
    }
    introduce(){
        return `I'm a worker. I have a job.` 
    }
}
