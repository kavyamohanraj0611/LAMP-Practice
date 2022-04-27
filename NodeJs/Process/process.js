//process.nextTick()

const fs=require('fs');
function file(filename,callback)
{
    if(typeof filename!='string')
    {
        return process.nextTick(callback,new TypeError('be string'));
    }
    fs.stat(filename,(err,data)=>
    {
        if(err)
         throw err;
        callback(null,data.size);
    })
}
file(__filename,(err,size)=>
{
    if (err) throw err;
    console.log("data...");
})
console.log("hii")
console.log("hello")



//Process events

// process.on('beforeExit', (code) => {
//     console.log('Process beforeExit event with code: ', code);
//   });
  
// process.on('exit', (code) => {
//     console.log('Process exit event with code: ', code);
//   });

// console.log("Done...");

// process.emitWarning('Oops..! Something Happened!', 'CustomWarning', 'WARN001');
