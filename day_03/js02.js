let num1 = 50;
const num2 = 12345.1256;
console.log(num2.toFixed(2)); //소수점 몇째자리 까지 보여줄지 지정. // 반올림 -> 12345.13 출력
console.log(num2.toPrecision(5)); //정수와 소수를 포함해 몇번째 자리 까지 보여줄 것인지 결정. // 반올림 값을 반환 
console.log(num2.toString());
console.log(Number.MAX_VALUE); // 자바스크립트에서 다룰수 있는 최대 수
console.log(Number.MIN_VALUE); // 자바스크립트에서 다룰수 있는 가장 작은 수

console.log(Math.ceil(10.53)); // 올림 11
console.log(Math.floor(10.53)); // 내림 10
console.log(Math.round(10.53)); // 반올림 11
console.log(Math.min(1, 5, 10)); // 최소값 1
console.log(Math.max(1, 5, 10)); // 최대값 10
console.log(Math.random()); // 랜덤
console.log(Math.round(Math.random()*100)); // 0~100 사이 무작위 수 (난수)

// random 이용해서 5자리 인증번호 출력

let pass = ""; // 빈 문자열
for (let i=1; i<6; i++){
    pass += (Math.floor(Math.random() * 10));
}
console.log(pass);


const text = 'Hello world!';
console.log(text.length); // 12 츨력
console.log(text.charAt(0));
console.log(text.charAt(6));
console.log(text.indexOf('t')); // 없으면 -1 출력
console.log(text.toUpperCase()); // 대문자
console.log(text.substring(2, 9)); // slice() 와 유사 단 매개변수에 음수를 허용하지 않음, 음수가 오면 0
                                    // console.log(text.substring(-1, -5)); x
console.log(text.slice(2, 9));
console.log(text.slice(-5));
console.log(text.slice(2, -2));
const spacetxt1 = '     aaaa            bbbb ';
const spacetxt2 = 'aaaa-bbbb-cccc-dddd';
console.log(spacetxt1.trim()); // 앞부분 공백만 삭제
console.log(spacetxt2.split('-')); // 특정구분자를 기준으로 문자열을 분리해서 배열로 반환

