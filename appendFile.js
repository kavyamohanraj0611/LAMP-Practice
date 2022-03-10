var fs = require('fs');

fs.appendFile('demo.txt', 'Welcome!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 