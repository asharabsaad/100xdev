// if this is an array of numbers, return true, else return false
const zod  = require("zod")


function validateInput(arr){
    // lots of checks needed without zod
    // if(typeof arr == "object" && arr.length >=1 &&){}
    
    // with zod

    const schema = zod.array(zod.number())
    
    const response = schema.safeParse(arr);
    console.log(response)
}

validateInput([1,23,4])