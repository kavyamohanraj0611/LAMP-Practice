const args = require('minimist')(process.argv.slice(2));    //slice 1st two arguments from command line - 1. Node path , 2.File path

console.log("The arguments are ",args);
console.log(args.i);     //-i input1
console.log(args.j);     //-j input2


// process.stdin.on('readable',()=>{
//     let input = process.stdin.read()
//     console.log(input)
// })
// process.stdin.pipe(process.stdout,)
