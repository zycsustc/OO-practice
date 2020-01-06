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
    constructor(name, age, classes){
        super(name, age);
        this.classes = classes
    }
    introduce(){
        return `I'm a student. I'm at Class ${this.classes}.`
    }
}
