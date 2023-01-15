// 논리합or ||   논리곱 &&   연산자를 이용한 단축평가
// 좌항 에서 우항으로 평가가 된다.  2개의 피연산자 중 어느 하나의 값으로 평가 된다. 
// 평가된 값은 형변환 하지 않고 현재 값 을 반환한다.

//논리합  || 
console.log(true || true) // true
console.log(30 || 50)  // 30
console.log(true || false)  // true
console.log( 10 || 0 )  //10
console.log( false || true)   // true
console.log( '' || 100 )  // 100
console.log( false || false)  // false
console.log( undefined || 0) //0
// 논리곱  && 
console.log(true && true)  //true 
console.log(300 && 500)  // 500
console.log(false && true) // false
console.log(0 && 500) // 0 
console.log(true && false) //false
console.log(1 && null) // null
console.log(false && false) // false 
console.log(0 && undefined)  // 0
// 부정연산 
console.log(!10) //(!true) => false 
console.log(!!10)//(!!true) => (!false) => true
console.log(!'hello')// false
console.log(!!'hello') //true