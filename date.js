var http = require('http');
var currDate = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.write("The current date and time : " + currDate.myDateTime());
  res.end();
}).listen(8080); 