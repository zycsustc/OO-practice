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
    isIn(student){
        if(student.klass.number===this.number){
            return true;
        }
        else{
            return false;
        }
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

class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce(){
        if(this.klasses&&this.klasses.length){
            let klass_num = '';
            for(let i=0;i<this.klasses.length;i++){
                klass_num += this.klasses[i].number+', '
            }
            klass_num = klass_num.slice(0,klass_num.length-2);
            return super.introduce()+' '+`I'm a Teacher. I teach Class ${klass_num}.`;}
        else{
            return super.introduce()+' '+`I'm a Teacher. I teach No Class.`;
        }
    }
    isTeaching(student){
        if(this.klasses){
            for(let i=0;i<this.klasses.length;i++){
                if(this.klasses[i].isIn(student)){
                    return true;
                }
            }
            return false;
        }
        else{
            return false;
        }
    }
}


