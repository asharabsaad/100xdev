 const jwt = require('jsonwebtoken')


 // decode, verify, generate jwt

 const value = {
    name: 'john',
    accountNumber: 123
 }

const token = jwt.sign(value,'secret');
console.log(token);

// this token has been gernerated using the secret key, 
// hence this token can only be verified using 
// the same secret key

// this is your chequebook

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsI
// mFjY291bnROdW1iZXIiOjEyMywiaWF0IjoxNzEyNTIwNTQ5fQ.4fEa9RUM
// eMxgf-G6z-oruZ8pWvJl6ac3rOksGXksET4
const decoded = jwt.decode(token);
console.log(decoded)

const verified = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImFjY291bnROdW1iZXIiOjEyMywiaWF0IjoxNzEyNTIwNTQ5fQ.Ci0-MmI-1CRDB0VH6Z3G6QwYLOcHfON7qMhnitbiBFw','secret')

console.log(verified)