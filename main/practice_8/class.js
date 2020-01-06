class Class{
    constructor(number){
        this.number = number;
    }
    assignLeader(student){
        this.leader = student;
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
}
