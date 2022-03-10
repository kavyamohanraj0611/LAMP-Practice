var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  url
  var que = url.parse(req.url, true).query;
  var txt = que.year + " " + que.month;
  res.end(txt);
}).listen(8080);