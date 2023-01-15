// 콜백함수
const plus = (num) => {
    return num + 2;
}

const minus = (num) => {
    return num - 2;
}

const multiply = (num) => {
    return num * 2;
}

const division = (num) => {
    return num / 2;
}

const cal = (fnc, numValue) => {
    return fnc(numValue);
}

console.log(cal(plus, 10)); //12
console.log(cal(minus, 10)); //8
console.log(cal(multiply, 10)); //20
console.log(cal(division, 10)); //5