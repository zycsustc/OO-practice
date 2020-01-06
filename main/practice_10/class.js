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


