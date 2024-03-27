// callback syntax
// function asharAsync(callback){
//     callback("hi there")
// }

// async function main(){
//     asharAsync(function(value){
//         console.log(value);
//     })
// }

// main();

// Promise (then) syntax

function asharAsync(){
    let p = new Promise(function(resolve){

        resolve("hi there")
    })
    return p; 
}
function main(){
    asharAsync().then(function(value){
        console.log(value)
    })
}
main();