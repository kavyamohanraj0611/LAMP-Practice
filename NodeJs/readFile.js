var http = require('http');
var fs = require('fs');
http.createServer(function (request, respond) {
  fs.readFile('Page.html', function(err, data) {
    if (err){
      throw err;
    }
    respond.write(data);
    return respond.end();
  });
}).listen(3000);
