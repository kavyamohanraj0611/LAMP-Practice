var fs = require('fs');

fs.copyFile('demo.txt','demo2.txt',err=>{if(err){throw err}          //copies demo.txt to demo2.txt
console.log('Copied');
});

fs.appendFile('demo.txt', '\nWelcome!', err=> {if (err) {throw err;}        //append "Welcome" to demo.txt
  console.log('Saved!');
}); 
