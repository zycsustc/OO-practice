class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        if(student.klass.number===this.number){
            this.leader = student;
            if(this.listener&&this.listener.isTeaching(student)){
                console.log(`I am ${this.listener.name}. I know ${student.name} become Leader of Class ${this.number}.`);
            }
        }
        else{
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
        if(this.listener&&this.listener.isTeaching(student)){
            console.log(`I am ${this.listener.name}. I know ${student.name} has joined Class ${this.number}.`);
        }
    }
    registerAssignLeaderListener(teacher){
        this.listener = teacher;
    }
    registerJoinListener(teacher){
        this.listener = teacher;
    }
    getDisplayName(){
        return `Class ${this.number}`
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

export default Class;