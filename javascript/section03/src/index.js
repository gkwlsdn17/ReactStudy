console.log("hi");


// CJS 방식인경우

// const moduleData = require("./math");
// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const {add, sub} = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));



//ESM 방식인 경우
// package.json에 "type":"module" 추가
// ESM모듈은 확장자까지 다 적어줘야 찾을 수 있음
// import mul from "./math.js";
import mul, {add, sub, printa} from "./math.js";
import randomColor from "randomcolor";


console.log(add(1, 2));
console.log(sub(1, 2));
printa();
console.log(mul(1, 2));


const color = randomColor();
console.log(color);