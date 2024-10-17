function SayHello(message){
   console.log("Hellow ", this.name, message);
   
}
let obj = {name:"Rushikesh", roll: 124};

SayHello.apply(obj, ["I am ok"]);