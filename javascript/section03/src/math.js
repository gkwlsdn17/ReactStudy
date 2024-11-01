function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

// CJS (Common JS)
// module.exports = {
//     add: add,
//     sub: sub
// };


//ESM
export {add, sub};
export function printa(){
    console.log("hi");
}
export default function multiply(a, b){
    return a*b;
}