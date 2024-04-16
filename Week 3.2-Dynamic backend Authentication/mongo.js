const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://asharabsaad:test123@cluster0.aohncff.mongodb.net/userappnew?retryWrites=true&w=majority&appName=Cluster0')


const User= mongoose.model('Users',{
    name: String,
    email: String,
    password: String
})


app.post('/signup',async (req,res)=>{
    const username = req.body.username
    const name = req.body.name
    const password = req.body.password
    
    const existingUser = await User.findOne({email:username})
    if(!existingUser) return "username already exist"
    const user = new User({
        name: name,
        email: username,
        password: password
    })
    user.save().then(()=>{
        console.log('saved')
    })
})
app.listen(3000)



