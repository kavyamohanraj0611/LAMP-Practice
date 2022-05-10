const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>
{
    res.sendFile(__dirname+"/login.html");
});
router.get('/home1',(req,res)=>
{
    res.redirect('https://knowledgebase.aspiresys.com/');
});
module.exports=router;
