class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        if(student.klass.number===this.number){
            this.leader = student;
        }
        else{
            console.log("It is not one of us.");
        }
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
    appendMember(student){
        student.klass = this;
    }
}

export default Class;

