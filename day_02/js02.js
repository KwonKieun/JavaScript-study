// 매개변수의 기본값은 undefined
function numAdd(a, b, c){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); //undefined
    return a+b+c;
}
console.log(numAdd(10, 20)); //NaN
// console.log(numAdd(10, 20, 30));

// 매개변수 초기값 설정
function numAdd2(a=0, b=0, c=0){
    console.log(arguments);
    return a+b+c;
}
console.log(numAdd2(10))

// rest 파라미터 (es6)
function numAdd3(...num){
    console.log(arguments);
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
    return;
}
numAdd3(10, 20, 30);

function numAdd4(a, b, ...num){
    console.log(a);
    console.log(b);
    console.log(num);
}
numAdd4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// for문을 이용하여 전달받은 매개변수의 총합을 구하는 함수
function numSum(...num){
    let summ = 0;
    for(let i=0; i<num.length; i++){
        summ += num[i];
    }
    return summ;
}
console.log(numSum(10, 20, 30, 40, 50, 60, 70));

