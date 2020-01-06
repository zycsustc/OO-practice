class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old.`;
    }
}

class Class{
    constructor(number){
        this.number = number;
    }
}

class Student extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+' '+`I'm a Student. I'm at Class ${klass.number}.`;
    }
}

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+' '+`I'm a Teacher. I teach Class ${this.klass.number}.`;}
        else{
            return super.introduce()+' '+`I'm a Teacher. I teach No Class.`;
        }
    }
    introduceWith(student){
        if(!this.klass){
            return super.introduce()+' '+`I'm a Teacher. I dont' teach ${student.name}.`;
        }
        if(student.klass===this.klass.number){
            return super.introduce()+' '+`I'm a Teacher. I teach ${student.name}.`;
        }
        else{
            return super.introduce()+' '+`I'm a Teacher. I dont' teach ${student.name}.`;
        }
    }
}
