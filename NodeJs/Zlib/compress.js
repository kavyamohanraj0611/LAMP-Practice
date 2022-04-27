//Compression

const zlib = require("zlib");
const fs = require('fs');
const input = fs.createReadStream('./largeFile11.txt');
const output = fs.createWriteStream('compressed_file.txt.gz');
const gzip = zlib.createGzip();
input.pipe(gzip).pipe(output);
console.log("Done");
