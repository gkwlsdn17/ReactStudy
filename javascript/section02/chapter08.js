// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr){
    console.log(item, idx, arr);
});

let doubledArr = [];
arr1.forEach((item)=>{
    doubledArr.push(item*2);
})
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 찾은게 여러개면 맨 앞 인덱스를 반환
// 존재하지 않으면 -1을 반환
let arr3 = [1, 2, 3, 2];
let index = arr3.indexOf(2);
console.log(index);


// 4. findIndex
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 모든 요소를 순회하면서 콜백함수를 만족하는 그런 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=>{
    if(item != 2) return true;
});
console.log(findedIndex);

const findedIndex2 = arr4.findIndex((item) => item % 2 === 0);
console.log(findedIndex2);

// findIndex는 객체 타입의 값을 찾을때 쓰면 좋음
let objArr = [
    {name: "홍길동"},
    {name: "고길동"}
]
const findedIndex3 = objArr.findIndex((item) => item.name === "고길동")
console.log(findedIndex3);


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name: "홍길동"},
    {name: "고길동"}
];

const finded = arr5.find((item) => item.name === "홍길동");
console.log(finded);