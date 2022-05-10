const express=require('express')
const app=express();
let routing=require('./router.js');

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+"/login.html");
});

app.get('/home',(req,res)=>
{
    res.send('<h1>Welcome '+req.query.username +' ' + req.query.password +'</h1>');
});
app.use('/',routing);
app.listen(8000,()=>
{
    console.log("Server is running");
})