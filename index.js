let name = {
   fname : "Rushikesh",
   lname : "Tekale"
}

let name2 = {
   fname:"Rohan",
   lname : "Tekale"
}

let getdata = function getName(hometown, city){
   console.log("Name is : " + this.fname + ", Lname : " + this.lname + ", Hometown : " + hometown + ", City : " + city);
}

let bindMethod = getdata.bind(name2, "Kolegaon", "Dharashiv");
let bindMethod2 = getdata.bind(name, "Kolegaon", "Pune");

console.log(bindMethod);
bindMethod();

console.log(bindMethod2);
bindMethod2();

