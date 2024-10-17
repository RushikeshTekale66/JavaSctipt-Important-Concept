let arr = [10, 20, 30, 40, 50];

//Map : Perform operation & return new array
let maparr = arr.map((values, index)=>{
   console.log(values, index);
   return values*values;
})

console.log(maparr);

//Filter : Apply filter & return new array

let filterarr = arr.filter((values)=>{
   console.log(values>25);
   return values>25;
   
})

console.log(filterarr);

//Reduce : Reduce the array into single value

let reducearr = arr.reduce((value)=>{
   return value+value;
})

console.log(reducearr);




