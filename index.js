let a = 10;
let b = 10;
 let result = a+b;

 let promice = new Promise(function(resolve, reject){
    console.log("Hellow");
    
    resolve(50);
 })

async function Time(){
    setTimeout(async ()=>{
       return await console.log("Time");
        
        
    }, 2000);
}


console.log(promice);
Time();
 console.log(result);
 
 
 