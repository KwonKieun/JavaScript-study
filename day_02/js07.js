//object 객체
let user = {
    name: 'kim',
    age: 50,
    address: 'Seoul',
    tel: '010-1234-5678',
    hello:function(){
        console.log(`안녕하세요. ${this.name}입니다.`);
    }
}
console.log(user);
console.log(user.name);
user.hello();

// name 모모 gender male age 5 family 러시안블루 sayhello : 냥냥
const cat = {
    name: '모모',
    gender: 'male',
    age: '5',
    num: 50,
    family: '러시안블루',
    sayhello: function(){
        console.log('냥냥');
    }
}
console.log(cat.name); //dot 노테이션 // 정적 접근
console.log(cat['gender']); //브라켓 노테이션..?
cat.sayhello();
cat.color = 'gray'; //속성추가
//cat['color'] = 'gray';
delete cat.num; //속성삭제
//delete cat['num'];
console.log(cat);

function catValue(obj, value) {
    return obj[value]; // 키 값을 동적으로 받을 때는 브라켓 노테이션만 가능
}
console.log(catValue(cat, 'gender'));


