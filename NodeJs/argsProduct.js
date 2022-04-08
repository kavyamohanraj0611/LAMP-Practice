let args2 = process.argv
args2[2]=Number(args2[2])
args2[3]=Number(args2[3])

let result = product(args2[2], args2[3])
console.log("Product of given numbers is ", result)

function product(arg1, arg2) {
	return arg1*arg2
}