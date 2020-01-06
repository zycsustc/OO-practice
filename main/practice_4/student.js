class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old.`;
    }
    basic_introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old. `;
    }
}

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;}
    introduce(){
        return super.basic_introduce()+`I'm a Student. I'm at Class ${this.klass}.`
    }
}
