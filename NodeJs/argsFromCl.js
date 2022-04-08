let arg = process.argv
arg[2]=Number(arg[2])
arg[3]=Number(arg[3])

let result = product(arg[2], arg[3])
console.log("Product of given numbers is ", result)

function product(arg1, arg2) {
	return arg1*arg2
}