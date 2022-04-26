const fs = require('fs')
fs.stat('/home/aspirenav172/Desktop/myCodes-main/NodeJs/exercise1.js', (err, file) => {
  if (err) 
    return err

  console.log(`Check if it is a file : ${file.isFile()}`)
  console.log(`Check if it is a directory : ${file.isDirectory()}`) 
  console.log(`Size of file : ${file.size}`) 
})