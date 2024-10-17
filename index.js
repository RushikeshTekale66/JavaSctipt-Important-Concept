function HigherOrder(){
   return function(){
      console.log("Higher Order function");
      
   }
}

let x = HigherOrder();
x();