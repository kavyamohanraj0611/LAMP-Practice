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
                console.log("File not found... using try/catch");
            }
            else{
                console.log("wrong encoding");
            }
        }
    });

fs.readFile(files[1],'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//using process   
process.on('uncaughtException',err=>console.log('The exception was caught... using process')); 

//using domain
let d=require('domain').create()
d.run(()=>{
    fs.readFile("./dem.txt",'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data);
    });
});

d.on("error",(err)=>console.log("The Error was caught... using domain"))