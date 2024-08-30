let name = {
   fname : "Rushikesh",
   lname : "Tekale"
}

 let getdata = function getName(){
   console.log("Name is : " + this.fname + ", Lname : " + this.lname);
}

let name2 = {
   fname:"Rohan",
   lname : "Tekale"
}

getdata.call(name2);
getdata.call(name);