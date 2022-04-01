var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('Page.html', function(err, data) {
    res.write(data);
    return res.end();
  });
}).listen(3000);
