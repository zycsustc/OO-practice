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

class Teacher extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+' '+`I'm a Teacher. I teach Class ${this.klass.number}.`;}
        else{
            return super.introduce()+' '+`I'm a Teacher. I teach No Class.`;
        }
    }
}

