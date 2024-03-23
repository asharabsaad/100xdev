const fs = require("fs")

fs.readFile("text.txt","utf-8",function(err,data){
    console.log(data);
}
)
console.log("hello")