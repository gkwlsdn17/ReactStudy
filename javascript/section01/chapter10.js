// 반복문

// for
for(let i = 0; i < 10; i++){
    if(i%2===0){
        continue;
    }
    console.log("반복!" + i);
    if(i >= 5){
        break;
    }
}