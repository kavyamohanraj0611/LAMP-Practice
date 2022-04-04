const fs = require('fs');
fs.readFile('demo.txt', {encoding: 'utf8'}, (err, data) => {
	console.log(data);
});

let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}
console.log('Sum: ', sum);
