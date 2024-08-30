function add(a){
   return function (b){
      return function (c){
         return a+b+b;
      }
   }
}
console.log(add(10)(20)(30));

//Advance writing
let add1 = (a)=>(b)=>(c)=>{ return a+b+c};

let result = add(10);
let result2 = result(20);
console.log(result2(30));






