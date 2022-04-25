let repl = require('repl')
const local = repl.start()
console.log("Repl started...")
local.on('exit',()=>{
    console.log("Repl ended");
    process.exit()
})