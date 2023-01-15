//프로토타입
function Student(a,b){
    this.name=a;
    this.age=b;
}
Student.prototype.address='korea';
const student1 = new Student('lee', 10);
const student2 = new Student('kim', 30);
// 1. 내가 address값을 가지고 있는지 검사
// 2. 부모의 원형 prototype을 검사
// 3. 부모의 부모의 원형 prototype을 검사
console.log(student1.address);
console.log(Student.prototype);
console.log(student1.__proto__);

// __proto__ : 부모 생성자의 프로토타입을 확인하는 속성

// 인스턴스(생성자로 찍어낸) 오브젝트가 값을 직접 소유하게 만들고 싶으면 constructor 생성자 함수에 만든다.
// prototype만 가지고 있고 참조해서 사용하고 싶으면 prototype에 만들어서 상속시킨다.

