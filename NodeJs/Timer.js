setImmediate(() => console.log("setImmediate is called"))
setTimeout(() => console.log("setTimeout executed"), 0)

process.nextTick(cb=>{
    console.log("Processing nextTick ")
})

console.log("Start")
