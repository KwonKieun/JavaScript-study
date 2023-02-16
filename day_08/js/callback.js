const fnc1 = function (data) {
    const result3 = data * data;
    return result3; // 100
}

const fnc2 = function (data, fnc) {
    const result2 = data / 2;
    return fnc(result2); // fnc1(10)
}

const fnc3 = function (data, fnc) {
    const result1 = data * 5;
    return fnc(result1, fnc1); // fnc2(20, fnc1)
}

let finalResult = fnc3(4, fnc2)

console.log(finalResult); // 100

/*
    ()=>{
        ()=>{
            ()=>{
                
            }
        }
    }

    ()=>()=>()=>()=>
    promise : 순서대로 진행 될 수 있도록 원활한 진행을 위해 만들어졌음(가독성).
              생성자 함수.
              new Promise(a, b)
              a = resolve -> success
              b = reject -> fail

              생성자이므로 변수에 할당함.
              임의의 함수를 만들어서 그 함수 내부에서 사용할 수 있도록 함.
*/