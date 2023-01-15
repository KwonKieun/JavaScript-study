// 생성자 함수를 사용해서 여러개의 오브젝트를 만들어서 사용
// prototype을 이용해서 상속받아 값을 참조
// -> ES6 클래스 Class

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
        // this.hi = function(){
        //     console.log('이름은 ' + this.name + ' 나이는 ' + this.age)
        // }
    }
    hi(){
        console.log('이름은 ' + this.name + ' 나이는 ' + this.age)
    }
}
const user1 = new User('김길동', 10);
const user2 = new User('이순희', 15);
user1.hi();

//extends 확장
class AddUserLocation extends User{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
}
const userlocation = new AddUserLocation('JACK', 20, 'NY');
console.log(userlocation);
userlocation.hi();



//
class Dog {
    constructor (color, weight, gender){
        this.color = color;
        this.weight = weight;
        this.gender = gender;
    }
}
const dog1 = new Dog('black', 3.5, 'male');
console.log(dog1)
//class Dog을 확장해서  Cat 만들고 name 속성 추가
class Cat extends Dog {
    constructor(color, weight, gender, name){
        super(color, weight, gender);
        this.name = name;
    }
}
const cat1 = new Cat('black', 3.5, 'male', '순둥이');
console.log(cat1)
