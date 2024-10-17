function add(a){
   return function(b){
      console.log(a+b);
      
   }
}
add(10)(10);