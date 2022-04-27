const express=require("express");
const app=express();
app.listen(9000,function(err,data){
    console.log("Server is running at port 9000");
})
app.get('/',function(req,res){
    res.send("<h1>Hi..I'm Kavya<br>Nice to meet you !!!</h1>")
})