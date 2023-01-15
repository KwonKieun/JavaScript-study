// 즉시 호출, 연달아 사용할 수 없음.

// (function (){
//     console.log('즉시 실행')
// })()

(function (){
    console.log(100)
})()


// fnc1()
// console.log(fnc3);

var fnc2 = () => {
    console.log('var 실행')
}
let fnc3 = () => {
    console.log('let 실행')
}
const fnc4 = () => {
    console.log('const 실행')
}
