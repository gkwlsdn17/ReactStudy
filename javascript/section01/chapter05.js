//자료형

// 1. Number
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let minf = -Infinity;

let nan = NaN; // 불가능한 연산을 할 때 NaN값이 나옴
console.log(1 * "hello");

// 2. String
let myName = "이정환"
let myLocation = "목동";
let introduce = myName + myLocation;
//string은 덧셈연산을 지원한다.
console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName} ${myLocation}`;
console.log(introduceText);

// 3. Boolean
let isSwitchOn = true;
let isEmpty = false;

// 4. Null
let emtpy = null;

// 5. Undefined
let none;
// 초기화하지 않았을때, 값을 가지지 않을때
console.log(none);