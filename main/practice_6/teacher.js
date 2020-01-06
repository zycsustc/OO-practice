class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old.`;
    }
}

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+' '+`I'm a Teacher. I teach Class ${this.klass}.`;}
        else{
            return super.introduce()+' '+`I'm a Teacher. I teach No Class.`;
        }
    }
}
