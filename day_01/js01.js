let a = 0;
console.log(a);
let b = 10;
console.log(b);
let c = 20;
console.log(c);

/*const d = "hello world";
console.log(d) ;*/
// d = "cng value" ; // const -> 바꿀 수 없음

let num=50;
let str = "자바스크립트";
let value1 = 123+"2023";
let value2 = 2022/"2023";
console.log(num);
console.log(str);
console.log(typeof value1);
console.log(typeof value2);

let str1 = 2030;
let str2 = "안녕\n"+str1+"년";
console.log(str2);

// 템플릿 리터럴 백틱 `
let str3 = `안녕하세요
올해는 ${str1}년입니다.`;
console.log(str3);

// boolean 불리언
let isOn = true ;
let isOff = false ;
console.log(isOn);
console.log(typeof isOff);

let js1;
console.log(typeof js1);

// 자바스크립트에서 거짓(false)으로 취급하는 값
// 0, -0, null, undefinded, NaN, ''

// 연산자
// 기본연산자
// % 나머지연산자
let num1 = 20;
let num2 = 3;
console.log(num1%num2);

// 할당연산자
let value3 = 1;
value3 *= 10;
console.log(value3); // 10
value3 *= 10;
console.log(value3); // 100
value3 %= 10;
console.log(value3); // 0

let value4=10; //Number
let value5='10'; // String 
let value6 = value4 === value5
console.log(value6);

let value7 = value4 !== value5;
console.log(value7);

let v1=10 , v2=20,v3=30 ,v4=40, result;
result = !(v1>v2) ;
console.log(!!v1);
console.clear()
result = v1<=v2 || v2>=v3 || v3<=v4;
console.log(result);

//증감연산자  ++ -- 
/*let value8 = 10;
 console.log(++value8) //11
console.log(++value8) //12
console.log(--value8) //11
console.log('-----------------------') //11
console.log(value8++) //11 -> 12 
console.log(value8++) //12 -> 13 
console.log(value8) //13
console.clear() */
