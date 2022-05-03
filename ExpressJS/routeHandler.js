const express = require('express');
const app = express();



app.get('/home', (req, res, next) => {
    console.log('Started ...')
    next()
  }, (req, res) => {
    res.send('Hello Everyone')
})


//Array of callback handling route

// const funct1 = function (req, res, next) {
//     console.log('Function 1')
//     next()
// }
  
// const funct2 = function (req, res, next) {
//     console.log('Function 2')
//     next()
// }
  
// const funct3 = function (req, res) {
//     res.send('Hello Everyone')
// }
  
// app.get('/home', [funct1, funct2, funct3])


app.listen(7000,()=>{
    console.log("Server is running");
})