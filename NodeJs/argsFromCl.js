const args = require('minimist')(process.argv.slice(2));

console.log("The arguments are ",args);
console.log(args.i);
console.log(args.j);

