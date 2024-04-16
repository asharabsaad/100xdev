// function getLength(name){
//     return name.length;
// }

// const ans = getLength();
// console.log(ans); // 0 


console.log('This is the end of the file'); // This is the end of the file

// with try catch block
// example 1
// function getLength2(name){
//     try{
//         return name.length;
//     }catch(e){
//         console.log("error occured");
//     }
// }   

// const ans2 = getLength2();
// console.log(ans2); // 0

// example 2

try{
    let a;
    console.log(a.length);
    console.log('This is the try block'); // if there is an error in the try block,
    // the catch block will be executed
}catch(e){
    console.log('This is the catch block');
    console.log(e); // TypeError: Cannot read property 'length' of undefined
}