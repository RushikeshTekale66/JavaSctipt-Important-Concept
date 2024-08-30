let name = {
   fname : "Rushikesh",
   lname : "Tekale"
}

let name2 = {
   fname:"Rohan",
   lname : "Tekale"
}

function getName(hometown, city){
   console.log("Name is : " + this.fname + ", Lname : " + this.lname + ", Hometown : " + hometown + ", City : " + city);
}


//Call() : It invoke a function by specifying ownwe object
getName.call(name2, "Kolegaon", "Dharashiv");
getName.call(name, "Kolegaon", "Pune");

//apply() : It is similar as call(), but difference is the it take arguments as an array.

getName.apply(name2, ["Kolegaon", "Dharashiv"]);
getName.apply(name, ["Kolegaon", "Pune"]);

//bind() : It is similar as call(), but is create a function when the function is called it set the keyword to the first argument.

let bindMethod = getName.bind(name, "Kolegaon", "Pune");
let bindMethod2 = getName.bind(name2, "Kolegaon", "Dharashiv");

bindMethod();
bindMethod2();
