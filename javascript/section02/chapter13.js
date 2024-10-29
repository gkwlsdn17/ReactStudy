// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수
        // executor
    
    
        setTimeout(()=>{
            if(typeof num === "number"){
                resolve(num+10);
            } else{
                reject("num이 숫자가 아닙니다");
            }
    
        }, 2000);
    });

    return promise;
}




const p = add10(0);
// then은 성공했을때만 진행
// 실패했을때는 catch를 사용해야함
// catch는 따로 써도 되는데, 이렇게 체인으로도 사용가능
p.then((value)=>{
    console.log(value);

    const newP = add10(value);
    newP.then((result) => {
        console.log(result);
    });

}).catch((error)=>{
    console.log(error);
});





add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result); // 한번더 진행
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error) => {
        // 처음이든 중간이든 에러가 나면 여기로 빠짐
        console.log(error);
    })