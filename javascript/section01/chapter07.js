// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위연산
++num8; // 전위연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 != 2;
let comp3 = 2 > 1;
let comp4 = 1 == "1";
let comp5 = 2 <= 1;
console.log(comp1, comp2, comp3, comp4, comp5);
// ==은 자료형 비교가 안됨 ex) 1 == "1" -> true가 나와버림
// ===은 자료형까지 비교가 됨 ex) 1 === "1" -> false