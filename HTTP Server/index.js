const express = require('express')
const bodyParser = require('body-parser')
// middlewares

const app = express();
const port = 3000
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',(req,res)=>{
    // console.log(req.headers['authorization'])
    console.log(req.body)
    res.send("hello world")
    
})
app.listen(port)