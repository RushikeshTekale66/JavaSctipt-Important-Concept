function computeSum(arr){
   if(arr.length===1){
      return arr[0];
   }
   else{
      // Function call
      return arr.pop() + computeSum(arr);
   }
}

let result = computeSum([1, 2, 3, 4, 5]);

console.log(result);
