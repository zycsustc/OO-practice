import Person from "../../main/practice_10/person.js";

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
            return super.introduce()+' '+`I am a Teacher. I teach Class ${klass_num}.`;}
        else{
            return super.introduce()+' '+`I am a Teacher. I teach No Class.`;
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

export default Teacher;

