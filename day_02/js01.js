function hello(){
    console.log('hello world')
}

hello();

function num(a, b){
    console.log(a)
}

num(10, 20);

function sum(a, b){
    console.log('함수');
    return a+b
}

const result = sum(1, 2);
console.log(result);

function userInfo(name, age){
    return `이름은 ${name} 나이는 ${age}`
}

const profile = userInfo('홍길동', 20);
console.log(profile);

// 두 개의 매개변수를 받아서 두 값을 곱해서 출력하는 함수
function mul(a, b){
    console.log(a * b);
}

mul(10, 20);

function mul2(a, b){
    return a * b
}
const returnn = mul2(20, 3);
console.log(returnn)

// 음수면 찍히지 않게
function outNum(num){
    if (num >= 0){
        console.log(num)
    }
    else {
        console.log('음수입니다.')
    }
}

outNum(-3);
// 음수면 찍히지 않게
