// Array 배열 생성

let array = new Array(3);
array[0] = 'A';
array[1] = 'B';
array[2] = 'C';
console.log(array);

let array2 = new Array(1, 2, 3);  // new 생략 가능
console.log(array2);

let array3 = [1, 2, 3, 4, 5];  // 가장 많이 사용
console.log(array3);
console.log(array3.length); // 5
console.log(array3[2]); // 3
array3[4] = 10; // 10으로 교체
console.log(array3[4]); // 10
console.log(array3); // [1, 2, 3, 4, 10]

const subway = ['1호선', '2호선', '3호선', '4호선', '5호선'];
subway.push('6호선'); // pop()
subway.unshift('0호선'); // shift(), 배열의 맨 앞에 요소를 추가하고 원본 배열은 추가한 요소의 수만큼 길이 늘어남
subway.splice(7, 0, '7호선', '8호선'); // splice(시작인덱스, 삭제할 개수, 추가될 값);

for (let i = 0; i < subway.length; i++){
    console.log(subway[i]);
}

let total="";
for (let j = 0; j < subway.length; j++){
    total += subway[j];
}
console.log(total);