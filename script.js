console.log( " Homework #8");


class Student {

    _marks = [];
    
    constructor(fullName,university,course){
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.isActive = true;
    }

    dismiss () {
        this.isActive = false;
    }

    recover () {
        this.isActive = true;
    }

    get marks() {
       
        if (this.isActive == false) {
            return null;
        }  

        if (this._marks==0){
            let minMark = 2;
            let maxMark = 5;
         
            for (let i = 0; i<4; i++ ){
               let markCount = maxMark - minMark;
               let randomMark = Math.random()*markCount; 
               randomMark = randomMark + minMark;
               randomMark = Math.round(randomMark);

               this._marks.push(randomMark);
            }}
        
        return this._marks;
    }

    set addMarks (newMark) {
        if (this.isActive == true){
            this._marks.push(newMark); 
        } 
    }
   
    getInfo(){
        return `Студент/ка: ${this.fullName}, Курс :${this.course}, Навчальний заклад: ${this.university}`;
    }

    getAverageMark () {
        if (this.isActive == true) {
            return  this.marks.reduce((mark,sum) => sum+=mark) / this.marks.length;
        } 
    }
}


class BudgetStudent extends Student {

    constructor (fullName,university,course){
        super(fullName, university, course);
        setInterval(()=> console.log(this.fullName,this.getScholarship()), 30000);
    }

    getScholarship () {
        if(this.isActive == true){
            let scholarshipMark = this.getAverageMark();
            const borderMark = 4;

            if (scholarshipMark >= borderMark){
                return "Ви отримали 1400 грн стипендії.";
            } else {
                return "Ви не отримуєте стипендії.";
            }
        } 
        else {
            return "Студента виключено.";
        }
    }


}


const student01 = new Student("Manko Volodymyr","Lviv Polytechnic", 5);
const student02 = new Student("Malkush Khrystyna","Lviv Polytechnic",4);
const student03 = new Student ("Sitnikov Oleksandr","Khmelnytsky Politechnical collage",4);

const student04 = new BudgetStudent ("Slivinska Sonia","Lviv Collage of Art", 3);
const student05 = new BudgetStudent ("Gumenna Valentyna","Khmelnytsky Politechnical collage",3);


console.log(student01.getInfo());

console.log(student03.fullName,student03.marks);

student03.addMarks = 5;
console.log(student03.fullName,student03.marks);

console.log(student03.fullName,student03.getAverageMark());

student03.dismiss();
console.log(student03.fullName,student03.marks);

student03.recover();
console.log(student03.fullName,student03.marks);

console.log("Advanced");

console.log(student04.getScholarship());
