class Student {
    constructor  (name, result){
        this.name = name;
        this.result= result;
    }

    resultCard(){
        console.log(this.name +" "+ this.result);
    }
}


const student1 = new Student("Rabbi", "Pass")
const student2 = new Student("Taiyb", "Fail")

student1.resultCard()
student2.resultCard()