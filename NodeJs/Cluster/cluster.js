var http=require('http')
var cluster=require('cluster')
const numCpu=require('os').cpus().length;       //returns the number of cpu cores

if(cluster.isMaster){
    console.log("Master Process id is : ",process.pid);
    for(let i=0;i<numCpu;i++)
    {
        cluster.fork();         //create a child process/worker
    }
    cluster.on('exit',(worker)=>{
        console.log(worker.process.pid," -Worker died");
        cluster.fork();
    })
}
else{
    http.createServer((req,res)=>{
    res.end("Hello..I'm Kavya Mohanraj - Current process id : ",process.pid)
}).listen(8000,()=>console.log("Server is running at port 8000 and Newly created worker id : ",process.pid));
}
