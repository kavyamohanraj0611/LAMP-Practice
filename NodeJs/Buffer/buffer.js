let buffer1 = Buffer.alloc(100);
let buffer2 = Buffer.from('ABC');

buffer1.write("Hi all...Welcome");
console.log(buffer1.toString());
console.log("\n",Buffer.isBuffer(buffer1));
console.log(buffer1.length);

let bufferNew = Buffer.from('Hello');
bufferNew.copy(buffer2);
console.log(bufferNew.toString());

let buffer4 = Buffer.from('Kavya Mohanraj');
console.log(buffer4.slice(0, 5).toString());

let buffer5 = Buffer.from('Have a nice day...');
let buffer6 = Buffer.from('Thank you !!!');
let bufferConcat = Buffer.concat([buffer5, buffer6]);
console.log(bufferConcat.toString());

let array = [1,2,3,4,5,6,7,8]
let buff = Buffer.from(array)
console.log(buff)
