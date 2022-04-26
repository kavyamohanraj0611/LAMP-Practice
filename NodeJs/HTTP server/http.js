const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;        
    response.setHeader('Content-Type', 'text/html');
    let body = "Kavya Mohanraj";
    const responseBody = { headers, method, url, body };
    console.log(responseBody);
    response.end('<html><body><h1>Hello World!</h1></body></html>');
}).listen(8086);