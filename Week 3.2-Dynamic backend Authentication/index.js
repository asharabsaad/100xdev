const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send('hello w')
})

app.listen(3000)