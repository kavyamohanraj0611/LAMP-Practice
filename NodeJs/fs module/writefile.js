const fs = require('fs');
  
let data = "Tony is always a busy man";
  
fs.writeFile("./demo.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\nThe file data is : ");
    console.log(fs.readFileSync("./demo.txt", "utf8"));
  }
});