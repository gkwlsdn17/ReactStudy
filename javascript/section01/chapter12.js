// 1. 함수 표현식

function funcA(){
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = function () {
    return 1;
}

let varC2 = (value) => value+1;


console.log(varC2(10));