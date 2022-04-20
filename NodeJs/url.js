// var http = require('http');  
// var url = require('url');  
// http.createServer(function (req, res) {  
//     var queryString = url.parse(req.url);  
//     console.log(queryString);
// }).listen(4200);  


var url = require('url');  
var url1="https://knowledgebase.com:2000/course/view.php?name=kavya&id=1234&domain=lamp";
var queryString = url.parse(url1); 
// console.log(queryString);

console.log("Complete href : "+queryString.href);
console.log("Host : "+queryString.host);  
console.log("Host name : "+queryString.hostname); 
console.log("Path name : "+queryString.pathname); 
console.log("Search items : "+queryString.search);  
console.log("Old port : "+queryString.port);  
queryString.port=4500;
console.log("Changed port : "+queryString.port);  
console.log("Protocol : "+ queryString.protocol); 