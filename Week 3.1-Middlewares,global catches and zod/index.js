
const express = require('express');
const app= express();

const port = 3000;


app.use(express.json())

app.post('/health-checkup',(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
  
    res.send(`u have ${kidneyLength} kidneys`)
})

app.use(function(err,req,res,next){
    res.json({
        msg: 'sorry something is up with our server'
    })
})


app.listen(port)