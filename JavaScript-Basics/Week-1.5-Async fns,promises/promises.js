
const fs = require('fs');
// my own asynchronous fn

// it is just a wrapper on top of another async fn
// usually all async fn u write will be top of JS provided async
// fn like setTimeout or fs.readFile
// function asharReadFile(cb){
//     fs.readFile("text.txt","utf8",(err,data)=>{
//         cb(data);
//     })
// }

// // callback fn to call
// function onDone(data){
//     console.log(data)
// }

// asharReadFile(onDone)

// its just syntactic sugar still uses callbacks under the hood

// my own asynchronous fn

function asharReadFile(){
    console.log("inside asharReadFile")
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("text.txt","utf-8",function(err,data){
            console.log("before resolve")
            resolve(data)
        })
    })
}
function onDone(data){
    console.log(data)
}

asharReadFile().then(onDone)