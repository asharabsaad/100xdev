const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "secret"

const app = express();
app.use(express.json())
const ALL_USERS =[
    {
        username:"asharab",
        password:"pass",
        name:'asharab'

    },
    {
        username:"arsalan",
        password:"pass21",
        name:'arsalan'
    },
    {
        username:"ali",
        password:"pass1",
        name:'alio'
    }
]
function userExists(username,password){
    for(let i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i] == username && ALL_USERS[i] == password){
            return true;
        }

    }
    return false
}
app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "user does not exist in our in memory db"
        })
    }
    var token = jwt.sign({username: username},jwtPassword)
    return res.json({
        token
    })
})

app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,password)
        const username = decoded.username;
    }catch{

    }
})



app.listen(3000) 