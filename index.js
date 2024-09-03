function* iteratorFun(){
   let count = 0;
   for(let i=0; i<5; i++){
      count ++;
      yield i;
   }
   return count;
}

let iterator = iteratorFun();

console.log(iterator.next());
console.log(iterator.next());


