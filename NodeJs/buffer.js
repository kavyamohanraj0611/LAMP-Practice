let buffer1 = Buffer.alloc(100);
let buffer2 = Buffer.from('ABC');

buffer1.write("Hi all...Welcome\n");
console.log(buffer1.toString());
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

let bufferNew = Buffer.from('Hello');
bufferNew.copy(buffer2);
let copyData = bufferNew.toString();
console.log(copyData);

let buffer4 = Buffer.from('Kavya Mohanraj');
console.log(buffer4.slice(0, 5).toString());

let buffer5 = Buffer.from('Have a nice day...');
let buffer6 = Buffer.from('Thank you !!!');
let bufferConcat = Buffer.concat([buffer5, buffer6]);
console.log(bufferConcat.toString());
