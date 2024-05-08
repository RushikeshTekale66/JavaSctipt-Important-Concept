// Destructuring in JS 

// Array Declaration
var arr = [1, 2, 3, 4, 5];
console.log(arr);

// Assigning array value to the variables
var [a, b, c] = arr;
console.log(a, b, c);

// assign value to spread operator
var [a, b, c, ...rest] = arr;
console.log(a, b, c, rest);  //a,b,c as a variable & rest as a array 

// Skip the limit of spread operator
var [a, , , ...rest] = arr;
console.log(a, rest);

// Distructuring object on the left hand side of assignment
var { a, b } = { a: 1, b: 2 };
console.log(a, b);

// Convert arry in key value pair using spread
var arr = [1, 2, 3];
var obj = { ...arr };
console.log(obj);

// Passing spread to function
var arr = [2, 3, 4]
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...arr));

// Value overriding using spread
var obj = {
    name:"Rushikesh",
    company:"Ador Welding",
    address:"Pune"
}
console.log(obj); //Print obj
console.log({...obj});
console.log({...obj, name:"Rohan"});  //Print obj changing value
console.log({name:"Adinath", ...obj}); //Print obj without changing value , Befor override & then print value;