//We have already covered this in the second lesson,
//  but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


let count = 0;
let a = setInterval(()=>{
    if(count==10)
        return
    else{
        return count
    }
    count++
},1000)

console.log(a)