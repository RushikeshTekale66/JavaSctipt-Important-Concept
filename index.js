// Callback function
function division(sum){
   console.log(Math.floor(sum/2));
}

function operation (num1, num2, operation){
   let sum = num1 + num2;
   operation(sum);
}

// Function is passed as argument to the another function
operation(10, 20, division);






