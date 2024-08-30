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

getdata.apply(name, ["Kolegaon", "Pune"]);
getdata.apply(name2, ["Kolegaon", "Dharashiv"])