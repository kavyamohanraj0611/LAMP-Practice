//Blocking

const fs = require('fs');
console.log("Start...");
const data = fs.readFileSync('./demo.txt','utf-8');
console.log(data);

let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}
console.log('Sum: ', sum);
