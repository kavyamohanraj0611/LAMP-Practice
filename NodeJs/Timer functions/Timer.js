/*Event loop precedence : 
call stack > microtasks > macrotasks*/

setImmediate(() => console.log("setImmediate is called"))
setTimeout(() => console.log("setTimeout executed"),100)
var count = 0
let result = setInterval(()=>{
    if(count < 5)
      console.log("Hello")
    else
      clearInterval(result)
    count++
    },1000)
var promise=new Promise((res,rej)=>{
    res();

}).then(()=>console.log("resolve"))
process.nextTick(()=>{
    console.log("Processing nextTick ")
})
console.log("Start")


//setInterval()

// var count = 0
// let result = setInterval(()=>{
//     if(count < 5)
//       console.log("Hello")
//     else
//       clearInterval(result)
//     count++
//     },1000)



//setTimeout()

// setTimeout(() => {
//   console.log("Welcome");
// }, 2000);



//nextTick()

// function funct(){
//     console.log('Processed in next iteration');
//   }
//   process.nextTick(cb1=()=>
//     {
//         console.log('process');
//     });
//   setTimeout(() => {
//       console.log("Welcome");
//     }, 1000);
//   console.log('Processed in the first iteration');
// funct()
  
