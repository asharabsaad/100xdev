const express = require('express')
const app = express();

// middleware
function ticketChecker(req,res,next){
    const ticket = req.query.ticket;
    if(ticket === 'free'){
        next()
    }else{
        return res.status(403).json({
            msg: "access denied"
        }
        )
    }
}

// use uper middleware in every route
app.use(ticketChecker)

app.get('/ride1',(req,res)=>{
    res.send('u rode the first ride')
})

app.get('/ride2',(req,res)=>{
    res.send('u rode the second ride ')

})
 app.get("/ride3",(req,res)=>{
    res.send('u rode the third ride')
 })
  

app.listen(3000)