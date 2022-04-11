
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


