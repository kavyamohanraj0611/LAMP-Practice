const fs = require('fs')
var readStream = fs.createReadStream('./largeFile.txt','utf8')
var writeStream = fs.createWriteStream('./newFile.txt')        //transforms the data as chunks
readStream.on('data',(chunk)=>{ 
    console.log("chunk received")           
    writeStream.write(chunk)
})


// Readable stream 

// const { Readable } = require('stream'); 
// const inStream = new Readable({
//   read() {}
// });
// inStream.push('ABCDEFGHIJKLM');
// inStream.push('NOPQRSTUVWXYZ');
// inStream.pipe(process.stdout);



//Transform stream

// const fs = require('fs');
// const zlib = require('zlib');
// const file = process.argv[2];

// const { Transform } = require('stream');
// const reportProgress = new Transform({
//   transform(chunk, encoding, callback) {
//     process.stdout.write('.');
//     callback(null, chunk);
//   }
// });
