// 단락평가

function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

// console.log(returnFalse() && returnTrue());
// &&라서 맨처음에 false면 뒤는 볼 필요가 없어서 뒷 항목은 접근 안함

// console.log(returnTrue() && returnFalse());
// 처음항목이 true라서 뒷항목까지 실행이 됨

// console.log(returnTrue() || returnFalse());
// ||라서 처음이 true면 무조건 true라서 뒷 항목 접근 안함

// console.log(returnFalse() || returnTrue());
// 처음항목이 false라서 뒷 항목까지 실행이 됨



// 단락 평가 활용 사례
person = {name:"nick"};
function printName(person){
    // if(!person){
    //     console.log("person에 값이 없음");
    //     return;
    // }
    const name = person && person.name;
    console.log(name || "person에 값이 없음");
}

printName();
printName(person);

// T || T면 앞의 True 값이 반환이 됨
// T && T면 뒤의 True 값이 반환이 됨
console.log({name: "bear"} || true);
console.log(true && {name: "tom"});