// 1.Falsy한 값 (조건문에서 거짓으로 평가되는 값)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1){
    console.log("falsy");
}

// 2. Truthy 한 값
// 7가지의 falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t5){
    console.log("truthy");
}

// 3. 활용 사례
function printName(person){
    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name:"홍길동"};
// let person;
printName(person);
