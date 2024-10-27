// 1. if 조건문
let num = 7;
if(num>=10){
    console.log("num은 10 이상입니다.");
}
else if(num >= 5){
    console.log("num은 5 이상입니다.")
}
else{
    console.log("조건은 거짓입니다.")
}

// 2. Switch문
// if문과 기능 자체는 동일
// 다수의 조건을 처리할 때 if보다 더 직관적이다.
let animal = "cat";
switch(animal){
    case "cat":
        console.log("고양이");
        break;
    case "dog":
        console.log("강아지");
        break;
    case "bear":
        console.log("곰");
        break;
    case "snake":
        console.log("뱀");
        break;
    case "tiger":
        console.log("호랑이");
        break;
    default:
        console.log("조건에 맞지않음");
}