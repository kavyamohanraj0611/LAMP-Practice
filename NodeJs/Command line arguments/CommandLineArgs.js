let args = process.argv    //stores the command line arguments in array

let result = product(args[2], args[3],args[4])     //since 1st two arguments from command line - 1. Node path , 2.File path
console.log("Product of given numbers is ", result)

function product(arg1, arg2,arg3) {
	return arg1*arg2*arg3
}
