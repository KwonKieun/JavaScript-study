//빈 오브젝트 생성
var person = new Object(); 
// var person = Object();

//만들어진 빈 오브젝트 안에 속성과 메서드 설정 
person.firstName = "길동";
person.lastName = "홍";
person.age = 15;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// var person = {
//     firstName: '길동',
//     lastName: '홍',
//     age: 15,
//     getFullName : function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
console.log(person.getFullName());