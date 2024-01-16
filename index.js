// Map in JS 
//It can create new array by performing some operation on it
// array.map(function(currentValue, index, arr), thisValue)

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return console.log(num * 10);;
}