

// const { Readable }=require('stream');
// const inStream = new Readable({
//     read() {
//         setTimeout(() => {
//             if (this.currentCharCode > 90) {
//                 this.push(null);
//                 return;
//               }
//           this.push(String.fromCharCode(this.currentCharCode++));
//         }, 100);
//     }
//   });
//   inStream.currentCharCode = 65;
//   inStream.pipe(process.stdout);


const { Duplex } = require('stream');
const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});
inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
