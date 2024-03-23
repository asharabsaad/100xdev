// // split
// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hello World", ", ");

// // trim
//  const value  = "   asharab   saad   "
//  console.log(value.trim())

//  // shift() delete element from the frt
// function shiftExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.shift();
//     console.log("After shift:", arr);
//   }
//   shiftExample([1, 2, 3]);
  
//   // unshift() put element in frnt 
//   function unshiftExample(arr, element) {
//     console.log("Original Array:", arr);
  
//     arr.unshift(element);
//     console.log("After unshift:", arr);
//   }
//   unshiftExample([1,23,4,5,2], 32)

// // callbacks fn

const arr = [1,2,3];
function out(str){
    console.log(str)
}
arr.forEach(out)