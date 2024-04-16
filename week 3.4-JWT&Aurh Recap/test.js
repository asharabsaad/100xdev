const jwt = require('jsonwebtoken')

const username = "asharab"
const password = "123456"

const jwtPassword  = 'secret';

const token = jwt.sign({
    username
},jwtPassword)
// const decoded = jwt.decode(token)
// console.log(token)
// console.log(decoded)

const verified = jwt.verify("laksjdfk",jwtPassword)  
if(verified){
    return true
}else{
    return false
}