// 동기와 비동기

console.log(1);
setTimeout(()=>{
    console.log(2); // 3초 뒤 2 출력
}, 3000);
console.log(3);
// 출력 1->3->2

// 자바스크립트 엔진은 쓰레드가 1개임
// 자바스크립트 엔진이 비동기 작업을 하는게 아니고
// Web APIs 가 비동기 작업을 진행