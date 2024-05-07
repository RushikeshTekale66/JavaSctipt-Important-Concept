// Simple function

// Without argeument
function fun() {
    console.log("Function without argument");
}

fun();

// Function with argument
function average(x, y) {
    return (x + y) / 2;
}

let a = 10;
let b = 20;

console.log("Average is ", average(a, b));

// Arrow function

let arrfun = ()=>{
    console.log("Arrow function with out argument");
}
arrfun();

// Arrow function with argument
let sum = (x, y) => {
    return x + y;
}

console.log("Sum is ", sum(a, b));