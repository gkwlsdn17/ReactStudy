// 1. 묵시적형변환
// 자바스크립트 엔진이 알아서 형 변환 하는것
let num = 10;
let str = "20";

const result = num + str;
console.log(result);
// 묵시적으로 스트링타입으로 형변환함

// 2. 명시적형변환
// 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열을 숫자로 변환할때
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20이 출력됨
let str2 = "10개"
let strToNum2 = Number(str2);
console.log(10 + strToNum2); // NaN이 나옴
let strToNum2_1 = parseInt(str2); // 글자에서 숫자부분을 형변환해줌
console.log(10 + strToNum2_1); 

// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 20입니다가 출력됨