//Promises

const fs = require('fs')
console.log(1)
new Promise((resolve, reject) => {
    fs.readFile('./demo.txt', 'utf-8',(err, data) => {
      if (err) {
        reject("Something went wrong..!")     
      }
        resolve(data)
    })
})
.then(data => console.log(data))
.catch(err => console.log(err))
console.log(2)


//Output:
//1
// 2
// Hi All
// Welcome!
