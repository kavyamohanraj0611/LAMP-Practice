//Non-Blocking
const fs = require('fs');
fs.readFile('demo.txt','utf-8', (err, data) => {
	if(err){
		throw "Oops!";
	}
	console.log(data);
});

let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}
console.log('Sum: ', sum);
