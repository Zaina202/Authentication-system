const express=require('express');
const httpServer=express();

httpServer.get('/',(req,res,next)=>{
    res.send('hi');
})

httpServer.listen(3200,()=>{
    console.log("server is running on 3200")
})