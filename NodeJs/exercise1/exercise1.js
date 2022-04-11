
var fs = require('fs');
fs.readFile('./exercise1.json',  function (err, data) {
  var details = JSON.parse(data);
  console.log(details);

  details.company="Aspire systems";
  details.country="India";
  
  var newData = JSON.stringify(details);
  fs.writeFile("./exercise1.json", newData, () => {
    console.log("\nNew datas added"); 
    console.log(details);

    fs.copyFile('./exercise1.json','./demo2.json',()=>{
      console.log("\nCopied to demo2.json file !")
    });
  });
});











// let http=require("http")
// let fs=require("fs")
// http.createServer(function (request, respond) {
//     fs.readFile('./exercise1.json', function(err, data) {
       
//       respond.write(data.toString());
//       return respond.end();
//     });

//     fs.readFile('./demo2.json', function(err, data) {
//         console.log(data);
//      });
// }).listen(7070);