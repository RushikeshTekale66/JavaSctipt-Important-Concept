function SayHello(){
   console.log("Hellow ", this.name);
   
}
let obj = {name:"Rushikesh", roll: 124};

let x = SayHello.bind(obj);
x();