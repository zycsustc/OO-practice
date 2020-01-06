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

class Worker extends Person{
    constructor(name, age, ){
        super(name, age);
    }
    introduce(){
        return basic_introduce()+`I am a Worker. I have a job.`
    }
}
