let a = 10;
let b = '10';

// Check the value not datatype : pass by value
if(a==b){
   console.log("Equal");
}
else{
   console.log("Not equal");
}

//check the value & datatype also : pass by referance
if(a===b){
   console.log("Equal");  
}
else{
   console.log("Not equal");
   
}