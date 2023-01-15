var persons = [
    {
      name: "a",
      point: 78,
      city: "서울",
    },
    {
      name: "b",
      point: 92,
      city: "서울",
    },
    {
      name: "c",
      point: 76,
      city: "제주",
    },
    {
      name: "d",
      point: 81,
      city: "서울",
    },
];

var pass = persons.filter((el) => {
    return el.point > 80;
});

console.log(pass);


let item = [
    {
        name: '커피',
        price: 5000
    },
    {
        name: '쥬스',
        price: 6000
    },
    {
        name: '우유',
        price: 2000
    },
    {
        name: '홍차',
        price: 3000
    }
]

var result = item.filter((i) => { // {} 생략 시 return 생략
    return i.price <= 3000;
});

console.log(result);
