
const express = require('express');
const app= express();
const zod = require('zod');
const port = 3000;
const schema = zod.object({
    kidneys: zod.array(zod.array())
})

app.use(express.json())

app.post('/health-checkup',(req,res)=>{
    const kidneys = schema.safeParse(req.body.kidneys);
    const kidneyLength = kidneys.length;
  
    res.send(`u have ${kidneyLength} kidneys`)
})

// globle catches
app.use(function(err,req,res,next){
    res.json({
        msg: 'sorry something is up with our server'
    })
})


app.listen(port)