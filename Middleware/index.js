const express = require('express');
const app = express();
const port = 3000;


app.get('/health-check',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username != "asharab" && password != "pass"){ 
        res.status(400).json({msg:"somthing up"})
        return
    } 
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg":"somethings up "})
        return
    }  
    res.json({
        "msg":"your kidney is fine"
    })
}) 


app.listen(port)