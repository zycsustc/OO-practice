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

