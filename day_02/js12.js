//getter setter
const user = {
    get nameOut(){  // get -> 반드시 return값 있어야 함.
        return this.name;
    },
    set nameIn(value){   // set -> 반드시 매개변수 1개 있어야 함.
        if(value.length < 5){
            console.log("글자수를 확인해주세요");
            return;
        }
        this.name = value;
    }
}

user.nameIn = "beneee";
console.log(user.nameOut);  //함수처럼 읽어오지 x

//class get set
class Student{
    constructor(name){
        this.name = name;
    }
    get getEndYear(){
        return `${this.name}의 졸업년도는 ${this.StartYear+4}`
    }
    set setStartYear(year){
        this.StartYear = year;
    }
}
const student1 = new Student('김철수');
student1.setStartYear = 2020;
console.log(student1.getEndYear);

// 숫자를 입력 받아서 set + get 10 출력
const num = {
    get outputNum(){
        return `출력값은 ${this._num+10} `;
    },
    set inputNum(value){
        
    }
}


// class Studentt{
//     get getNum(){
//         return num + 10;
//     }
//     set setNum(num){
//         this.Num = num;
//     }1
// }
// const student2 = new Studentt('rrr');
// student2.setNum = prompt('숫자를 입력하세요');