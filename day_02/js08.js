//생성자 함수 오브젝트를 만드는 함수
function People(nameValue, ageValue){
    this.name = nameValue;
    this.age = ageValue;
    this.address = 'seoul';
}

const people1 = new People('순이', 20);
const people2 = new People('철수', 22);
console.log(people2);


function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return this.radius * 2;
    }
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(circle1);
console.log(circle2.getDiameter()); //지름 20

// 이름, 국, 영, 수, 평균 메소드
function Score(name, kor, eng, math){
    this.name = name;
    this.korNum = kor;
    this.engNum = eng;
    this.mathNum = math;
    this.getAvg = function(){
        return (kor+eng+math)/3 ;
    }
}
const stud1 = new Score('kie', 100, 90, 95);
console.log(stud1);
console.log(stud1.getAvg());
console.log(Score.prototype);
