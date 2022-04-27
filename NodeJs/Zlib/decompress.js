//Decompression

const zlib = require("zlib");
const fs = require('fs');
const unzip=zlib.createUnzip();
const input = fs.createReadStream('demo.txt.gz');
const output = fs.createWriteStream('demo1.txt');
input.pipe(unzip).pipe(output);
console.log("Done");
