// 함수

function gretting(){
    console.log("안녕하세요!");
}

console.log("호출전");
gretting();
console.log("호출후");


function getArea(width, height){
    function another(){
        console.log("another");
    }
    another();
    let area = width * height;
    return area;
}

console.log(getArea(10, 20));
console.log(getArea(30, 40));