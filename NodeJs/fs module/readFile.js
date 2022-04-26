var http = require('http');
var fs = require('fs');
http.createServer(function (request, respond) {
  fs.readFile('./loginPage.html', function(err, data) {
    if (err){
      throw err;
    }
    respond.write(data);
    return respond.end();
  });
}).listen(3000);
