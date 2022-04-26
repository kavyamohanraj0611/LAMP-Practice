var http = require('http')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/HTML'});     //Response dislayed as HTML format
  response.write('<b>HTML format</b><br>')
  response.write('Hello this is Kavya from LAMP team...Nice to meet you !!!<br>')
  response.write('Have a great day...<br>')
  response.end('Thank you !!!')
}).listen(8080)

http.createServer(function (request, respond) {
  respond.write('Default format\n')                           //Response will be displayed in default format
  respond.write('\nHello this is Kavya from LAMP team...Nice to meet you !!!\n')
  respond.write('\nHave a great day...\n')
  respond.end('\nThank you !!!')
}).listen(7000)
