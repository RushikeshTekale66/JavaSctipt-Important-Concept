function add (){
   let a = 10;
   let b = 10;
    return function(){
      console.log(a+b);
      
    }
}

let result = add();
result();








