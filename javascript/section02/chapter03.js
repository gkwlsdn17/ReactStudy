// 1. 배열의 구조 분해 할당;
let arr = [1, 2, 3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

let [one1, two1, three1] = arr;
let [one2, two2] = arr;
let [one3, two3, three3, four3] = arr;
let [one4, two4, three4, four4 = 1] = arr;
console.log(one1, two1, three1);
console.log(one2, two2);
console.log(one3, two3, three3, four3);
console.log(one4, two4, three4, four4);

// 2. 객체의 구조 분해 할당
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
};

// let {name, age, hobby, extra = "hello"} = person;
// console.log(name, age, hobby, extra);
// console.log(person);

let {
    age: myAge,
    hobby,
    name,
    extra = "hello",
} = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}

func(person);