const fs = require('fs')

//callstack
console.log(1);

//Macro task
setTimeout(()=> {
    console.log('Welcome');
}, 5000);
setTimeout(()=> {
    console.log('Hello');
}, 2500);


//Micro Task
new Promise((resolve, reject) => {
        resolve("Promise executed")
})
.then(data => console.log(data))
.catch(err => console.log(err))

//micro Task
process.nextTick(()=>console.log("process.nextTick is executed"))

//macro task
setTimeout(()=> {
    console.log('Hi')
}, 1000);


//callstack
for (const value of ['John','Rob','Stark']) {
    console.log(value);
}
//callstack
function funct() {
    console.log(2);
}

funct();

/*Output:
1
John
Rob
Stark
2
process.nextTick is executed
Promise executed
Hi
Hello
Welcome
*/

/*Event loop precedence : 
call stack > microtasks > macrotasks*/
