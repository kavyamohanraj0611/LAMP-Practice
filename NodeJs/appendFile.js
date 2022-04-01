var fs = require('fs');

fs.appendFile('Page.html', '\nWelcome!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
