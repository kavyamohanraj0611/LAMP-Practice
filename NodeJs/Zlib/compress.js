//Compression
const zlib = require("zlib");
const fs = require('fs');
const input = fs.createReadStream('demo.txt');
const output = fs.createWriteStream('demo.txt.gz');
const gzip = zlib.createGzip();
input.pipe(gzip).pipe(output);
console.log("Done");
