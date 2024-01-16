let arr = ["Rushikesh", 45, "Kolegaon"];

// 1) for loop
for(let i=0;i<arr.length; i++){
    console.log("for loop : " + arr[i]);
}

// 2) for each
arr.forEach((element)=>{
    console.log("for each:  " + element);
})

// 3) for / of loop
for(element of arr){
    console.log("for of :  "+ element);
}

// 4) for in loop - To iterate through object we use for in loop
let obj = {
    name:"Rushikesh",
    rollNo:54,
    homeTown:"Kolegaon"
}

for(key in obj){
    console.log("for in key in : "+ obj[key]);
    console.log(`for in key is ${key} & element is ${obj[key]}`)
}
