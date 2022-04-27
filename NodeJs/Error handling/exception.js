const fs=require('fs')
let files=['./demo.txt','./nofile.text'];

//using try/catch block
files.forEach(file=>
    {
        try{
            let data=fs.readFileSync(file,'utf-8');
            console.log(data);
        }
        catch(err)
        {
            if(err.code=='ENOENT'){
                console.log(file," - File not found... using try/catch");
            }
            else{
                console.log(file," - wrong encoding");
            }
        }
    });

fs.readFile(files[1],'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});


//using process   
process.on('uncaughtException',err=>console.log('\nThe exception was caught... using process')); 


//using promises
const promise = new Promise(function (resolve, reject) {
    reject(new Error('\nSomething was wrong...'));
});

promise.then(() => {
        console.log("\nhi");
    })
    .then(() => {
        console.log('\nhello'); 
    })
    .catch(err => {
        console.log(err.message); 
    })
    
