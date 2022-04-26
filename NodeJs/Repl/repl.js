let repl = require('repl')

let result = repl.start()
console.log("Repl started...")
result.on('exit',()=>{
    console.log("Repl ended");
    process.exit()
})


//Strict mode -cannot use undeclared variables 

// repl.start({
//     ignoreUndefined:true, 
//     replMode:repl.REPL_MODE_STRICT 
// })
