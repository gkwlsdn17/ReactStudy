// 1. 배열 순회
let arr = [1, 2, 3]

// 1.1 배열 인덱스
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// 1.2 for of 반복문
let arr2 = [4, 5, 6, 7, 8];
for (let item of arr2) {
    console.log(item);
}

// 2. 객체 순회
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스"
}

// 2.1 Object.keys 사용
// 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// for(let i=0;i<keys.length;i++){
//     console.log(keys[i]);
// }

for(let key of keys){
    const value = person[key];
    console.log(key, value);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for(let val of values){
    console.log(val);
}

// 2.3 for in
for(let key in person){
    console.log(key);
}




// 배열을 순회할때는 for of 만 사용가능
// 객체를 순회할때는 for in 만 사용가능