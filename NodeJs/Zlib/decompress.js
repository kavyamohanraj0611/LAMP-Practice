//Decompression

const zlib = require("zlib");
const fs = require('fs');
const unzip=zlib.createUnzip();
const input = fs.createReadStream('./compressed_file.txt.gz');
const output = fs.createWriteStream('largefile11.txt');
input.pipe(unzip).pipe(output);
console.log("Done");
