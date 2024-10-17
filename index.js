function SayHello(){
   console.log("Hellow ", this.name);
   
}

let obj = {name:"Rushikesh", roll: 124};

SayHello.call(obj);